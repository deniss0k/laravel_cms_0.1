// var keypressSlider = document.getElementById('keypress');
// var input0 = document.getElementById('input-with-keypress-0');
// var input1 = document.getElementById('input-with-keypress-1');
// var inputs = [input0, input1];
//
// noUiSlider.create(keypressSlider, {
//     start: [0, 5000],
//     connect: true,
//     step: 10,
//     range: {
//         'min': 0,
//         'max': 5000
//     },
//
//     format: wNumb({
//         decimals: 0,
//     })
// });
//
// keypressSlider.noUiSlider.on('update', function (values, handle) {
//     inputs[handle].value = values[handle];
// });
//
//
// function setSliderHandle(i, value) {
//     var r = [null, null];
//     r[i] = value;
//     keypressSlider.noUiSlider.set(r);
// }
//
// // Listen to keydown events on the input field.
// inputs.forEach(function (input, handle) {
//
//     input.addEventListener('change', function () {
//         setSliderHandle(handle, this.value);
//     });
//
//     input.addEventListener('keydown', function (e) {
//
//         var values = keypressSlider.noUiSlider.get();
//         var value = Number(values[handle]);
//
//         // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
//         var steps = keypressSlider.noUiSlider.steps();
//
//         // [down, up]
//         var step = steps[handle];
//
//         var position;
//
//         // 13 is enter,
//         // 38 is key up,
//         // 40 is key down.
//         switch (e.which) {
//
//             case 13:
//                 setSliderHandle(handle, this.value);
//                 break;
//
//             case 38:
//
//                 // Get step to go increase slider value (up)
//                 position = step[1];
//
//                 // false = no step is set
//                 if (position === false) {
//                     position = 1;
//                 }
//
//                 // null = edge of slider
//                 if (position !== null) {
//                     setSliderHandle(handle, value + position);
//                 }
//
//                 break;
//
//             case 40:
//
//                 position = step[0];
//
//                 if (position === false) {
//                     position = 1;
//                 }
//
//                 if (position !== null) {
//                     setSliderHandle(handle, value - position);
//                 }
//
//                 break;
//         }
//     });
// });
//
//
//
// var secondRange = document.getElementById('keypress2');
// var input2 = document.getElementById('input-with-keypress-2');
// var input3 = document.getElementById('input-with-keypress-3');
// var inputs1 = [input2, input3];
//
// noUiSlider.create(secondRange, {
//     start: [1, 30],
//     connect: true,
//     step: 1,
//     range: {
//         'min': 1,
//         'max': 30
//     },
//
//     format: wNumb({
//         decimals: 0,
//     })
// });
//
// secondRange.noUiSlider.on('update', function (values, handle) {
//     inputs1[handle].value = values[handle];
// });
//
//
// function setSliderHandle2(i, value) {
//     var r = [null, null];
//     r[i] = value;
//     secondRange.noUiSlider.set(r);
// }
//
// // Listen to keydown events on the input field.
// inputs1.forEach(function (input4, handle) {
//
//     input4.addEventListener('change', function () {
//         setSliderHandle2(handle, this.value);
//     });
//
// });