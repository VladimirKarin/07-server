class PageTemplate {
    headHTML() {
        return `<head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                 </head>`
    }
    headerHTML() {
        return `    <header>

                        <img src="#" alt="logo">

                        <nav>

                        <a href="/services">Home</a>
                        <a href="/about">About</a>
                        <a href="/services">Services</a>
                        <a href="/contact">Contact</a>
                        
                        </nav>

                     </header>`
    }
    mainHTML() {
        return `
                        <h1> SOME PAGE TEMPLATE</h1>
                        <p>Lorem ipsum doler sit amet</p>
                `
    }

    footerHTML() {
        return `        <foooter>
                        <p>2023 - All rights reserved :P</p>
                        </foooter>`
    }
    render() {
        return `< !DOCTYPE html>
                <html lang="en">
                ${this.headHTML}
                <body>
                     ${this.headerHTML}
                    <main>
                    ${this.mainHTML}
                    </main>
                    ${this.footerHTML}</body>
                </html>`
    }
}
export { PageTemplate }