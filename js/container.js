const initBox = document.querySelector(".album-friend");

    const photos = []
    photos.push({
             image: 'https://images.pexels.com/photos/1231230/pexels-photo-1231230.jpeg?cs=srgb&dl=pexels-sharefaith-1231230.jpg&fm=jpg'
    })
    photos.push({
             image: 'https://images.pexels.com/photos/745045/pexels-photo-745045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    })
    photos.push({
             image: 'https://images.pexels.com/photos/1037989/pexels-photo-1037989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
    photos.push({
            image: 'https://images.pexels.com/photos/1037989/pexels-photo-1037989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

    function loadPhotos() {

    for ( photo of photos) {
        const cardGroup = document.createElement('div');
        const groupImage = document.createElement('img');

        cardGroup.classList.add('photo')
        groupImage.setAttribute('src', photo.image)

        cardGroup.appendChild(groupImage)
        initBox.appendChild(cardGroup);
      }
    }
    loadPhotos(photos);