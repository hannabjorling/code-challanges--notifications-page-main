const container = document.querySelector(".notification_container");
const notificationEl = Array.from(container.children);
notificationEl.shift(); // Removing header_container from array 

// Gets all items with the class of 'read' and puts it in an array 
const readItems = document.getElementsByClassName("read");
let readElements = Array.from(readItems);

// Gets all 'unread' items 
let unread = 7 - readElements.length;

// -- UNREAD DOT -- 
const unreadDot = document.getElementsByClassName("icon-dot");
const unreadDotEl = Array.from(unreadDot);

// IF card[i] != read, ADD 'unread' to dot[i]
const checkDot = () => {
    for (let i = 0; i < notificationEl.length; i++) {
        if (!notificationEl[i].classList.contains("read")) {
            unreadDotEl[i].classList.add("unread");
        } else if (notificationEl[i].classList.contains("read")) {
            unreadDotEl[i].classList.remove("unread");
        }
    }
}

checkDot()

// -- NOTIFICATION NUMBER --
const notificationNr = document.querySelector('.notification_nr');
notificationNr.innerHTML = unread;

// -- MARK INDIVUDUAL AS READ  --
notificationEl.forEach(child => {
    child.addEventListener('click', () => {
        child.classList.add("read");
        unread -= 1;
        checkDot();

        // To make sure we dont get negative values 
        if (unread >= 0) {
            notificationNr.innerHTML = unread;
        }
    }, { once: true }); // Only read one click
})

// -- MARK ALL AS READ BTN --
const markAsRead = document.querySelector('.noticiation_mark-as');
markAsRead.addEventListener('click', () => {
    notificationEl.forEach(child => {
        child.classList.add("read");
        checkDot();
        unread = 0;
        notificationNr.innerHTML = unread;
    })
})