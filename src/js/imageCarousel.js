const imageCarousel = () => {
    fetch('./src/js/SliderData.json')
      .then(res => {
        return res.json();
      })
      .then(data => {
        let imagedata = data.pictures;
        let images = imagedata.map(x => x.imageurl);
        const total = images.length;
        let currentSlide = 1;
        
        const nextSlide = () => {
          currentSlide >= total -1 ? currentSlide = total-1 : currentSlide++
          if(currentSlide === total-1){
            document.getElementById('next').style.opacity='1';
            document.getElementById('next').style.cursor='auto';
          }
          else{
            document.getElementById('prev').style.opacity='1'
            document.getElementById('prev').style.cursor='pointer';
          }
          document.getElementById('img').style.backgroundImage=`url(${images[currentSlide]})`
          console.log(currentSlide)
          
        }

        const prevSlide = () => {
          currentSlide <= 0 ? currentSlide = 0 : currentSlide--
          if(currentSlide ===0){
            document.getElementById('prev').style.opacity='1';
            document.getElementById('prev').style.cursor='auto';
          }
          else{
            document.getElementById('next').style.opacity='1'
            document.getElementById('next').style.cursor='pointer';
          }
          document.getElementById('img').style.backgroundImage=`url(${images[currentSlide]})`
        }

        document.getElementById('next').addEventListener('click',nextSlide);
        document.getElementById('prev').addEventListener('click',prevSlide);
      })
      .catch(err => console.log(err))
}
export default imageCarousel;