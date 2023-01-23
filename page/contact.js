import { PageTemplate } from "../lib/PageTemplate.js";

class PageContact extends PageTemplate {
    constructor() {
        super();
        this.thisTitle = 'Contact';
    }
    mainHTML() {
        return `<h1>Contact us</h1>
                <p>No!</p>`;
    }
}

export { PageContact }