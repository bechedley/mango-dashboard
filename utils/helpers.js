module.exports = {
    format_date: (date) => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()
            }`;
    },
    format_amount: (amount) => {
        // format large numbers with commas
        return `$${parseInt(amount).toLocaleString()}`;
    },

    format_link: (url) => {
        const https = "https://";
        if (url.indexOf(https) === -1) {
            return https.concat(url);
        } else {
            return url
        };
    },

    format_uppercase: (text) => {
        return `${text.toUpperCase()}`;
    },

    if_active: (data) => {
        if (data == "active") {
            return true;
        } else {
            return false;
        }
    },

    if_pending: (data) => {
        if (data == "pending") {
            return true;
        } else {
            return false;
        }
    },

    if_upcoming: (data) => {
        if (data == "upcoming") {
            return true;
        } else {
            return false;
        }
    },

    if_cancelled: (data) => {
        if (data == "cancelled") {
            return true;
        } else {
            return false;
        }
    },

    if_finished: (data) => {
        if (data == "finished") {
            return true;
        } else {
            return false;
        }
    },
};