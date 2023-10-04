document.addEventListener('DOMContentLoaded', function () {
    const leftText = document.getElementById('leftText');
    const middleText = document.getElementById('middleText');
    const rightText = document.getElementById('rightText');
    const bottom1 = document.getElementById('bottom1');
    const catImage = document.createElement('img'); // 创建猫的图片元素
    const dogImage = document.createElement('img'); // 创建狗的图片元素
    const catImage2 = document.createElement('img'); // 创建猫的图片元素2
    const dogImage2 = document.createElement('img'); // 创建狗的图片元素2

    // 图片路径1
    const catImagePath = './image/cat.jpg';
    const dogImagePath = './image/dog.jpg';

    // 设置图片的样式1
    catImage.src = catImagePath;
    catImage.alt = 'cat';
    catImage.className = 'pic';
    catImage.style.maxWidth = 'auto'; // 设置图片最大宽度为50%
    catImage.style.height = '355px'; // 让图片高度自适应

    dogImage.src = dogImagePath;
    dogImage.alt = 'dog';
    dogImage.className = 'pic';
    dogImage.style.maxWidth = 'auto'; // 设置图片最大宽度为50%
    dogImage.style.height = '355px'; // 让图片高度自适应

    // 图片路径2,用于中间
    const catImagePath2 = './image/cat.jpg';
    const dogImagePath2 = './image/dog.jpg';

    // 设置图片的样式2
    catImage2.src = catImagePath2;
    catImage2.alt = 'cat';
    catImage2.className = 'pic';
    catImage2.style.maxWidth = '410px'; // 设置图片最大宽度为50%
    catImage2.style.height = '355px'; // 让图片高度自适应

    dogImage2.src = dogImagePath2;
    dogImage2.alt = 'dog';
    dogImage2.className = 'pic';
    dogImage2.style.maxWidth = '410px'; // 设置图片最大宽度为50%
    dogImage2.style.height = '355px'; // 让图片高度自适应


    leftText.addEventListener('click', function () {
        bottom1.style.backgroundImage = 'none'; // 移除背景图片
        bottom1.style.background = 'linear-gradient(to right, #00f 95%, #008000 5%)';
        // bottom1.style.backgroundColor = '#00f'; // 设置背景颜色为蓝色
        // 移除底部区域的子元素
        while (bottom1.firstChild) {
            bottom1.removeChild(bottom1.firstChild);
        }
        // 添加猫的图片
        catImage.style.position = 'relative'; // 设置图片的位置为绝对定位
        catImage.style.top = '20px'; // 设置图片距离顶部边缘
        catImage.style.left = '-113px'; // 设置图片距离左边边缘   -133和边缘对齐，+20
        bottom1.appendChild(catImage);
    });

    middleText.addEventListener('click', function () {
        bottom1.style.backgroundImage = 'none'; // 移除背景图片
        bottom1.style.background = 'linear-gradient(to right, #00f 50%, #008000 50%)';
        // bottom1.style.backgroundColor = '#00f'; // 设置背景颜色为蓝色
        bottom1.style.width = '900px'; // 设置宽度为900px
        bottom1.style.height = '500px'; // 设置高度为500px
        // 移除底部区域的子元素
        while (bottom1.firstChild) {
            bottom1.removeChild(bottom1.firstChild);
        }
        // 添加猫和狗的图片
        catImage2.style.position = 'relative'; // 设置图片的位置为绝对定位
        catImage2.style.top = '20px'; // 设置图片距离顶部边缘
        catImage2.style.left = '-20px'; // 设置图片距离左边边缘   -40和边缘对齐，+20
        bottom1.appendChild(catImage2);
        dogImage2.style.position = 'relative'; // 设置图片的位置为绝对定位
        dogImage2.style.top = '20px'; // 设置图片距离顶部边缘
        dogImage2.style.left = '20px'; // 设置图片距离左边边缘   0和边缘对齐，+20
        bottom1.appendChild(dogImage2);
    });

    rightText.addEventListener('click', function () {
        bottom1.style.backgroundImage = 'none'; // 移除背景图片
        bottom1.style.background = 'linear-gradient(to left,  #008000 95%,#00f 5%)';
        // bottom1.style.backgroundColor = '#0f0'; // 设置背景颜色为绿色
        // 移除底部区域的子元素
        while (bottom1.firstChild) {
            bottom1.removeChild(bottom1.firstChild);
        }
        dogImage.style.position = 'relative'; // 设置图片的位置为绝对定位
        dogImage.style.top = '20px'; // 设置图片距离顶部边缘
        dogImage.style.left = '-113px'; // 设置图片距离左边边缘
        bottom1.appendChild(dogImage);
    });
});
