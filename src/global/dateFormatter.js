export default class DateFormatter {

    formatDateToMMDDYYYY() {
        const currentDate = new Date(); // Get the current date
        
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(currentDate);

        return (formattedDate);
    }

    getDay(date){
        switch(date.getDay()){
            case 0:
                return "Monday";
            case 1:
                return "Tuesday";
            case 2:
                return "Wednesday";
            case 3:
                return "Thursday";
            case 4:
                return "Friday";
            case 5:
                return "Saturday";
            case 6:
                return "Sunday";
            default:
                return null;
        }
    }

    formatDateToMMDDYYYY(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
        return (formattedDate);
    }
}