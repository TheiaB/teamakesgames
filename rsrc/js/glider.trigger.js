const s = document.querySelectorAll('.slider-container>div');
s.forEach(i=>{
    new Glider(i,{slidesToShow:1,slidesToScroll:1,draggable:true,dragVelocity:1,scrollLock:true,scrollLockDelay:100,arrows:{
        prev: '#'+i.parentElement.parentElement.id+' .gl-prev',
        next: '#'+i.parentElement.parentElement.id+' .gl-next'
}})});