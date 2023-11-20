import "../styles/ubicacion.css"


function Ubicacion(){
    return(
        <section id="ubicacion">
            <h1 className="h1-ubicacion">Encuentranos</h1>
            <div className="div-map">
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3927.6551579491743!2d-68.0209043893651!3d10.127286889942951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDA3JzM4LjIiTiA2OMKwMDEnMDYuMCJX!5e0!3m2!1ses-419!2sus!4v1700510165832!5m2!1ses-419!2sus" width="" height="" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}

export default Ubicacion;