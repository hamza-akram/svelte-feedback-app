import { writable } from "svelte/store";

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: "Lsdfsdfsdfdsf dsfsdfsdfdsf sdfsdf",
  },
  {
    id: 2,
    rating: 8,
    text: "Lsdfsdfsdfdsf dsfsdfsdfdsf sdfsdf",
  },
  {
    id: 3,
    rating: 6,
    text: "Lsdfsdfsdfdsf dsfsdfsdfdsf sdfsdf",
  },
  {
    id: 4,
    rating: 1,
    text: "Lsdfsdfsdfdsf dsfsdfsdfdsf sdfsdf",
  },
]);
