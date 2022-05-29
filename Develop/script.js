// save button
let saveBtn = $('.saveBtn');
// text input fields
let taskItem = $('input[name="taskItem"]');

let currentTime = moment().format('ddd, DD/MM/YYYY, HH:mm:ss');//capital 24 hour
$("#currentDay").text(currentTime);

// save button function
saveBtn.on('click', function (event) {
    event.preventDefault();
    //sibling because same level as input
    let val = $(this).siblings('.taskItem').val();
    let key = $(this).siblings('.taskItem').data('hour');

    // console.log(key)

    // console.log(saveBtn)
    // console.log(taskItem.val());

    // save to local storage
    localStorage.setItem(key, val);
});

//function to run on page reload
function onLoad() {
    // Starting cannot be the index
    let hour = 7

    //getting the current time variable
    let currentHour = moment(Date.now()).format('H');

    //getting the input element for a particular hour
    let inputEl = $('.taskItem').each(function (i, el) {
        let inputTime = $(this).data('hour');
        hour++;
        // if the hour index match the key value of the Item, get that item's value
        if (hour === inputTime) {
            let notes = localStorage.getItem(hour);
            $(this).val(notes);
        }
        // comparing the current time to the index time and setting css styling for past, present, future
        // if current time is equal to hour, do present
        if (currentHour === hour) {
            // apply css class
            $(taskItem).addClass("present");
            // if current time is after hour, do past
        } else if (currentHour > hour) {
            $(taskItem).addClass("past");
            // if current time is before hour, do future
        } else if (currentHour < hour) {
            $(taskItem).addClass("future");
        }
    });

    console.log(hour)
    console.log(inputEl);

}

// run this function on page load/reload
onLoad();
