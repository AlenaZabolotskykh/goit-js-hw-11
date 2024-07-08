const loader = document.querySelector('.loader')

export function getPicturesByQuery(query) {
  loader.style.display = 'inline-block';
const KEY = '44791676-0ec883c6e453828f8c76360bc';
  return fetch(
    `https://pixabay.com/api/?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then((res) => {
    console.log(res);

    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
   

