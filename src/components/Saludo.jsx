import './Saludo.css'
function Saludo(){
    const frutasfavoritos = [
        "Manzana", "Platano" , "Fresa", "Sandía"
    ]

    return(
        <>
        <h1 className='SaludoComponente'>Soy Estrella Delicio Gonzales</h1>
        <p>Bienvenido a la creaciòn de aplicaciones con  React</p>
        <p>Soy estudiante de Diseño y Programación Web y te ayudare con ello</p>
        <h2>Lista de mis frutas favoritas</h2>
        <ol>
            <li>{frutasfavoritos[0]}</li>
            <li>{frutasfavoritos[1]}</li>
            <li>{frutasfavoritos[2]}</li>
        </ol>
        </>
        
    );
}

export default Saludo