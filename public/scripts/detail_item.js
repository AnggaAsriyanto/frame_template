const closeBtn = document.getElementById('close');
const closeBlg = document.getElementById('close-blg');
const detailP  = document.querySelector('.detail-item-port');
const detailB  = document.querySelector('.detail-item-blog')
const imgGrid  = document.querySelectorAll('.grid-list');
const blogList = document.querySelectorAll('.blog-list');
const listDet  = document.querySelectorAll('.list');
const blogDet  = document.querySelectorAll('.blog');

// portfolio item
const imgPort = ['https://images.unsplash.com/photo-1482053450283-3e0b78b09a70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80', 'https://images.unsplash.com/photo-1525498128493-380d1990a112?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80', 'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80', 'https://images.unsplash.com/photo-1502014822147-1aedfb0676e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80', 'https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80', 'https://images.unsplash.com/photo-1502005097973-6a7082348e28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80', 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80'];
const categoryPort = ['#design', '#illustration', '#design', '#web', '#web', '#design', '#photo'];

// miniblog item
const imgBlog = ['https://images.unsplash.com/photo-1611465577672-8fc7be1dc826?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
                'https://images.unsplash.com/photo-1631623394471-7386b50b149c?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60']
const dateBlog = ['22 Okt 2021', '21 May 2021']
const titleBlog = ["Theme is more important than hierarchy, Here's why", 'Reasons you should learn programming in 2021']


addPortItem(listDet);
addPortItem(imgGrid);

addBlogItem(blogDet);
addBlogItem(blogList);


imgGrid.forEach((img, idx) => {
    img.addEventListener('click', () => {
        showItem(listDet, detailP, idx);
    })
})

blogList.forEach((blog, idx) => {
    blog.addEventListener('click', () => {
        showItem(blogDet, detailB, idx)
    })
})


closeBlg.addEventListener('click', () => {
    toggleShow(detailB);
})

closeBtn.addEventListener('click', () => {
    toggleShow(detailP);
})

function showItem(el1, el2, num) {
    removeShow(el1);
    el1[num].classList.add('show');
    el2.classList.toggle('show');
}

function toggleShow(el) {
    el.classList.toggle('show')
}

function addPortItem(el) {
    el.forEach((list, idx) => {
        list.children[0].children[0].src = imgPort[idx];
        list.children[1].children[0].innerText = categoryPort[idx];
    })
}

function addBlogItem(el) {
    el.forEach((list, idx) => {
        list.children[0].children[0].src = imgBlog[idx];
        list.children[1].children[1].innerText = dateBlog[idx];
        list.children[2].children[0].innerText = titleBlog[idx];
    })
}

function removeShow(el) {
    el.forEach(list => {
        list.classList.remove('show')
    })
}
