import { PageTemplate } from "../lib/PageTemplate";

class PageAbout extends PageTemplate {
    mainHTML() {
        return `<h1>About</h1>
            <p>About Page</p>`
    }
}
}
export { PageAbout }