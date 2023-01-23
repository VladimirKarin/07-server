import { PageTemplate } from "../lib/PageTemplate";

class PageHome extends PageTemplate {
    mainHTML() {
        return `<h1>Welcome To The Page</h1>`
    }
}
export { PageHome }