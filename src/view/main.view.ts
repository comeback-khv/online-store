import mainController from '../controller/main.controller';

class MainView {
  private createLayout() {}

  render(root: HTMLElement) {
    const template = `<aside class="sidebar">
          <ul class="sidebar__list">
            <li class="sidebar__item sidebar__item--active">Categories</li>
            <li class="sidebar__item">Mobiles</li>
            <li class="sidebar__item">Computers & Tablets</li>
            <li class="sidebar__item">Gaming</li>
            <li class="sidebar__item">Televisions & Home Theaters</li>
            <li class="sidebar__item">Home Appliances</li>
            <li class="sidebar__item">Headphones & Speakers</li>
          </ul>
        </aside>
        <div class="main-content">
          <section class="banner">
            <button class="banner__btn">Browse Products</button>
          </section>
          <section class="categories">
            <h2 class="categories__title">Popular Categories</h2>
            <ul class="categories__list">
              <li class="categories__item">Mobiles</li>
              <li class="categories__item">Computers & Tablets</li>
              <li class="categories__item">Gaming</li>
              <li class="categories__item">
                Televisions & Home Theaters
              </li>
              <li class="categories__item">Home Appliances</li>
              <li class="categories__item">Headphones & Speakers</li>
            </ul>
          </section>
          <section class="deals">
            <h2 class="deals__title">Hot Deals</h2>
          </section>
        </div>`;
    if (root) root.insertAdjacentHTML('beforeend', template);
    const bannerBtn = document.querySelector('.banner__btn');

    if (bannerBtn) {
      bannerBtn.addEventListener('click', () => {
        mainController.route('products');
      });
    }
  }
}

export default new MainView();
