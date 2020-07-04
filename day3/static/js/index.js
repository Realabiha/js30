const inputs = document.querySelectorAll('input');
inputs.forEach( v => {
    v.onchange = handleChange;
    v.onmousemove = handleChange;
})

function handleChange(e){
    
    // CSSStyleDeclaration.setProperty() 方法接口为一个声明了CSS样式的对象设置一个新的值 
    // document.documentElement document.querySelector('html') document.querySelector(':root')
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${this.dataset.unit || ''}`);
}