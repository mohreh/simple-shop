import { defineStore } from "pinia";

export const useBasket = defineStore("basket", {
  state: () => ({
    items: [],
    totalPrice: 0,
    alert: { show: false, status: false, message: "" },
    cash: 0,
  }),
  actions: {
    async add(id: number) {
      const { ok, message } = await $fetch("/api/basket/add", {
        method: "POST",
        body: {
          id,
        },
      });

      console.log(ok, message);

      if (ok) {
        this.alert.show = true;
        this.alert.status = true;
        this.alert.message = message;
      } else {
        this.alert.show = true;
        this.alert.status = false;
        this.alert.message = message;
      }

      await this.fetch();
    },

    async reduce(id) {
      const { ok, message } = await $fetch("/api/basket/reduce", {
        method: "POST",
        body: {
          id,
        },
      });

      this.alert.show = true;
      this.alert.status = true;
      this.alert.message = message;

      await this.fetch();
    },

    async fetch() {
      const { items, totalPrice } = await $fetch("/api/basket");

      this.items = items;
      this.totalPrice = totalPrice;
    },

    async clean() {
      const { ok, message } = await $fetch("/api/basket/clean");

      this.alert.show = true;
      this.alert.status = true;
      this.alert.message = message;

      await this.fetch();
    },

    async charge(amount: number) {
      const { ok, message } = await $fetch("/api/user/charge", {
        method: "POST",
        body: {
          amount,
        },
      });

      this.alert.show = true;
      this.alert.status = true;
      this.alert.message = message;

      await this.myCash();
    },

    async myCash() {
      this.cash = await $fetch("/api/user/cash");
    },

    async buy() {
      const { ok, message } = await $fetch("/api/basket/buy");

      if (ok) {
        this.alert.show = true;
        this.alert.status = true;
        this.alert.message = message;
      } else {
        this.alert.show = true;
        this.alert.status = false;
        this.alert.message = message;
      }

      await this.fetch();
      await this.myCash();
    },

    disableAlert() {
      this.alert.show = false;
    },
  },
});
