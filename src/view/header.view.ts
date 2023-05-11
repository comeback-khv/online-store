import headerController from '../controller/header.controller';

class HeaderView {
  private createLayout() {}

  render(root: HTMLElement) {
    // const updateMain = () => {
    //   const products = document.querySelector('.products');
    //   if (products) {
    //     products.remove();
    //   }
    //   mainView.render(root);
    // };

    const template = `<div class="container header__container">
    <h1 class="header__title">Amazon</h1>
        <div class="header__logo"></div>
        <div class="search">
          <input
            class="search__input"
            type="search"
            name="product-search"
            id="search__input"
            placeholder="Search..."
          />
          <select name="product-select" id="search__select">
            <option class="search__option" value="1">1</option>
            <option class="search__option" value="2">2</option>
            <option class="search__option" value="3">3</option>
            <option class="search__option" value="4">4</option>
            <option class="search__option" value="5">5</option>
            <option class="search__option" value="6">6</option>
          </select>
          <div class="search__icon"></div>
        </div>
        <div class="header__icons">
          <div class="header__icons-favourites"></div>
          <div class="header__icons-cart">
            <div class="header__icons-total">1</div>
          </div>
          <div class="header__icons-user"></div>
        </div>
        </div>`;

    if (root) root.insertAdjacentHTML('beforeend', template);

    const headerLogo = document.querySelector('.header__logo');
    if (headerLogo) {
      headerLogo.addEventListener('click', () =>
        headerController.route('main')
      );
    }
  }
}

export default new HeaderView();

// class HeaderView {
//   root;

//   constructor() {
//     this.root = document.getElementById('root') as HTMLElement;
//   }

//   private createHeader() {
//     const header = document.createElement('header');
//     header.className = 'header';
//     return header;
//   }

//   private createHeaderLogo() {
//     const headerLogo = document.createElement('div');
//     headerLogo.className = 'header__logo';
//     headerLogo.textContent = '🛍';
//     return headerLogo;
//   }

//   private createHeaderTitle() {
//     const headerTitle = document.createElement('h1');
//     headerTitle.className = 'header__title';
//     headerTitle.innerHTML = 'Online Store';
//     return headerTitle;
//   }

//   private createHeaderTotalPrice() {
//     const headerTotalPrice = document.createElement('div');
//     headerTotalPrice.className = 'header__total-price';
//     headerTotalPrice.innerHTML = 'Cart total: €0.00';
//     return headerTotalPrice;
//   }

//   private createHeaderCart() {
//     const headerCart = document.createElement('div');
//     headerCart.className = 'header__cart';
//     return headerCart;
//   }

//   private createHeaderCartTotalWrapper() {
//     const headerCartTotalWrapper = document.createElement('div');
//     headerCartTotalWrapper.className = 'header__cart-total';
//   }

//   private createHeaderCartTotal() {
//     const headerCartTotal = document.createElement('div');
//     headerCartTotal.className = 'header__cart-total-content';
//     headerCartTotal.innerHTML = '0';
//   }

//   render() {
//     this.root.append(this.createHeader());
//     const header = document.querySelector('header') as HTMLElement;
//     header.append(this.createHeaderLogo());
//     header.append(this.createHeaderTitle());
//     header.append(this.createHeaderTotalPrice());
//     header.append(this.createHeaderCart());
//   }
// }

// export default HeaderView;

// private createLayout() {
//   this.layout.header = document.createElement('header');
//   this.layout.header.className = 'header';
//   this.layout.headerLogo = document.createElement('div');
//   this.layout.headerLogo.className = 'header__logo';
//   this.layout.headerTitle = document.createElement('h1');
//   this.layout.headerTitle.className = 'header__title';
//   this.layout.headerTitle.innerHTML = 'Online Store';
//   this.layout.headerTotalPrice = document.createElement('div');
//   this.layout.headerTotalPrice.className = 'header__total-price';
//   this.layout.headerTotalPrice.innerHTML = 'Cart total: €0.00';
//   this.layout.headerCart = document.createElement('div');
//   this.layout.headerCart.className = 'header__cart';
//   this.layout.headerCartTotalWrapper = document.createElement('div');
//   this.layout.headerCartTotalWrapper.className = 'header__cart-total-wrapper';
//   this.layout.headerCartTotal = document.createElement('div');
//   this.layout.headerCartTotal.className = 'header__cart-total';
//   this.layout.headerCartTotal.innerHTML = '0';
//   this.layout.headerCartTotalWrapper.append(this.layout.headerCartTotal);
//   console.log(this.layout);
// }
