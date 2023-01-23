import { PageTemplate } from "../lib/PageTemplate";

class Page404 extends PageTemplate {
    mainHTML() {
        return `<h1>404</h1>
            <p>Page not found!</p>`
    }
}
export { Page404 }