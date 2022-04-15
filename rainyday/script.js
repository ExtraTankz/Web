var audio = new Audio('https://cdn.sndup.net/j8h3/Sound%20For%20Web.mp3?token=cSjQJ6lyYZajfKYxQcHWBTnefrVWYD7fY9a_NLXfk2g&token_path=%2Fj8h3%2F&expires=1645646439');
audio.play();
class MousePan {
  constructor(options) {
    this.resize = this.resize.bind(this);
    this.onMousemove = this.onMousemove.bind(this);
    this.tick = this.tick.bind(this);
    this.$wrapper = options.el;
    this.ease = options.ease || .08;
    this.init();
  }

  init() {
    this.position = {
      x: 0,
      y: 0 };


    this.destination = {
      x: 0,
      y: 0 };


    this.size = {
      x: 0,
      y: 0,
      offsetX: 0,
      offsetY: 0 };



    this.resize();
    this.bindEvents();
    this.tick();
  }

  resize() {
    this.setWrapperSize();
    this.setWrapperPosition();
  }

  bindEvents() {
    window.addEventListener('mousemove', this.onMousemove);
    window.addEventListener('resize', this.resize);
  }

  setWrapperSize() {
    this.size = [].slice.call(this.$wrapper.childNodes).reduce(this.getMaxSize);
    this.size.offsetX = this.size.w - window.innerWidth;
    this.size.offsetY = this.size.h - window.innerHeight;
    this.$wrapper.style.width = `${this.size.w}px`;
    this.$wrapper.style.height = `${this.size.h}px`;
  }

  getMaxSize(a, b) {
    a.w = a.nodeType !== undefined ? a.offsetWidth : a.w;
    a.h = a.nodeType !== undefined ? a.offsetHeight : a.h;
    a.w = a.w || 0;
    a.h = a.h || 0;
    const w = b.offsetWidth || 0;
    const h = b.offsetHeight || 0;
    return {
      w: Math.max(a.w, w),
      h: Math.max(a.h, h) };

  }

  setWrapperPosition() {
    this.destination.x = .5 * this.size.offsetX;
    this.destination.y = .5 * this.size.offsetY;
  }

  onMousemove(e) {
    const x = e.clientX;
    const y = e.clientY;
    this.destination.x = this.size.offsetX > 0 ? this.map(x, 0, window.innerWidth, 0, this.size.offsetX) : 0;
    this.destination.y = this.size.offsetY > 0 ? this.map(y, 0, window.innerHeight, 0, this.size.offsetY) : 0;
  }

  tick() {
    this.movePosition();
    this.$wrapper.style.transform = `translate3d(-${this.position.x}px, -${this.position.y}px, 0)`;
    window.requestAnimationFrame(this.tick);
  }

  movePosition() {
    this.position.x += (this.destination.x - this.position.x) * .08;
    this.position.y += (this.destination.y - this.position.y) * .08;
  }

  // Utils
  map(val, oldMin, oldMax, newMin, newMax) {
    return newMin + (val - oldMin) * (newMax - newMin) / (oldMax - oldMin);
  }}


new MousePan({
  el: document.querySelector('.pan-wrapper'),
  ease: .05 });
  
setTimeout(function () {
    document.getElementById('info').style.display = 'none'
    document.getElementById('info').style.display = 'none'
}, 5000)
document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('myaudio').play();
    document.removeEventListener('click', musicPlay);
}
setTimeout(function () {
   window.location.href = "./credits.html"; //will redirect to your blog page (an ex: blog.html)
}, 137000); //will call the function after 2 secs.