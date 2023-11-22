import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

// If using flatpickr in a framework, its recommended to pass the element directly
flatpickr(element, {});

// Otherwise, selectors are also supported
flatpickr("#myID", {});

// creates multiple instances
flatpickr(".anotherSelector");
