export default function Loading(){
    return(
        <>
            <div class="row justify-content-center" id="loading">
                <div class="col-6 text-center">
                    <div class="spinner-border text-secondary" role="status">
                        <span class="visually-hidden"></span>
                    </div>
                    <p>Cargando...</p>
                </div>
            </div> 
        </>
    );
}