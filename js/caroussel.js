$(document).ready(function()
{
    let caroussels = document.getElementsByClassName('image-caroussel');
    let bigPoster = ['images/maxresdefault.jpg', 'images/avengers.jpg', 'images/justiceleague.jpg'];
    let time = 6000;
    let bigPosterindex = 0;

    [].forEach.call(caroussels, function(c)
    {
        let next = c.getElementsByClassName('next')[0],
            prev = c.getElementsByClassName('prev')[0],
            bubbles = c.getElementsByClassName('bubbles')[0],
            inner = c.getElementsByClassName('inner')[0],
            imgs = c.getElementsByTagName('img')[0],
            currentImagenIndex = 0,
            width = 244,
            imgsArrayWidth = 4;

            function switchImg()
            {
                inner.style.left = -width * currentImagenIndex + 'px';
            }

            next.addEventListener('click', function()
            {
                currentImagenIndex++;
                if(currentImagenIndex >= imgsArrayWidth)
                {
                    currentImagenIndex = imgsArrayWidth;
                }
                switchImg();
            });

            prev.addEventListener('click', function()
            {
                currentImagenIndex--;
                if(currentImagenIndex < 0)
                {
                    currentImagenIndex = 0;
                }
                switchImg();
            });
    });
    
    function automaticChange()
    {
        $('#bigPoster').attr('src', bigPoster[bigPosterindex]);

        if(bigPosterindex < bigPoster.length - 1)
        {
            bigPosterindex++;
        }
        else
        {
            bigPosterindex = 0;
        }
        setTimeout(() => {
            $('#bigPoster').fadeOut(200);
            $('#bigPoster').fadeIn(200);
        }, 5800);
        
        setTimeout(() => {
            automaticChange(); 
        }, time);
    }
    automaticChange();
});