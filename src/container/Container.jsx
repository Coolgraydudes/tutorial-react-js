
export default function Container({children}) {
    return (
        <>
            <div className="container">
                <h1>Pondok abujar</h1>
                {children}
                <footer>
                    <p>Copyright © 2026 Abujar. All Rights Reserved.</p>
                </footer>
            </div>
        </>
    )
}