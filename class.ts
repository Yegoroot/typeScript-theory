class Message {
    messageText: string;

    constructor(text) {
        this.messageText = text;
    }
    showAlert() {
        alert(this.messageText)
    }
}

let text = new Message ('hello')
text.showAlert()