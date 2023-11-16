

import '../styles/menu.css';

function Menu(){
    return(
       
        <section id='menu' className="menu">
            <div class="contenedor-menu">
					<div class="contenedor-menu2">
        				<h1 className='h1-menu'>Menú</h1>
						<div className='div-row'>
							<article className='article-menu'>
								<p class="categoria">Platillos</p>
								<div class="platillo">
									<p class="nombre">Sed sagittis nisl dictum</p>
									<p class="precio">$15</p>
									<p class="descripcion">Praesent gravida, augue sit amet dignissim rutrum, 
									enim tellus suscipit risus.</p>
								</div>
								<div class="platillo">
									<p class="nombre">Lorem ipsum dolor sit amet</p>
									<p class="precio">$10</p>
									<p class="descripcion">Vestibulum ac sem id massa tempor vestibulum sed 
									ut magna</p>
								</div>
								<div class="platillo">
									<p class="nombre">Sed sagittis nisl dictum</p>
									<p class="precio">$20</p>
									<p class="descripcion">Praesent gravida, augue sit amet dignissim rutrum, 
									enim tellus suscipit risus.</p>
								</div>
								<div class="platillo">
									<p class="nombre">Sed sagittis nisl dictum</p>
									<p class="precio">$35</p>
									<p class="descripcion">Praesent gravida, augue sit amet dignissim rutrum, 
									enim tellus suscipit risus.</p>
								</div>
							</article>

							<article className='article-menu'>
								<p class="categoria">Bebidas</p>
								<div class="platillo">
									<p class="nombre">Sed sagittis nisl dictum</p>
									<p class="precio">$15</p>
									<p class="descripcion">Praesent gravida, augue sit amet dignissim rutrum, 
									enim tellus suscipit risus.</p>
								</div>
								<div class="platillo">
									<p class="nombre">Sed sagittis nisl dictum</p>
									<p class="precio">$15</p>
									<p class="descripcion">Praesent gravida, augue sit amet dignissim rutrum, 
									enim tellus suscipit risus.</p>
								</div>
								<div class="platillo">
									<p class="nombre">Sed sagittis nisl dictum</p>
									<p class="precio">$15</p>
									<p class="descripcion">Praesent gravida, augue sit amet dignissim rutrum, 
									enim tellus suscipit risus.</p>
								</div>
								<div class="platillo">
									<p class="nombre">Sed sagittis nisl dictum</p>
									<p class="precio">$15</p>
									<p class="descripcion">Praesent gravida, augue sit amet dignissim rutrum, 
									enim tellus suscipit risus.</p>
								</div>
							</article>
						</div>
					</div>
				</div>
        </section>

    )
}

export default Menu;