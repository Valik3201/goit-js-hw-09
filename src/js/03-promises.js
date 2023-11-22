// all modules
import Notiflix from "notiflix";

// one by one
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Report } from "notiflix/build/notiflix-report-aio";
import { Confirm } from "notiflix/build/notiflix-confirm-aio";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Block } from "notiflix/build/notiflix-block-aio";

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
