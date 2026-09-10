// Glow & Grow - Complete Luxury Botanical E-Commerce Engine

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. Full 14-Product Botanical Catalog Data
  // ==========================================================================
  const productsData = [
    {
      id: "shampoo",
      name: "Nourishing Shampoo",
      category: "cleanse",
      categoryLabel: "Step 01 • Cleanse",
      price: 28,
      img: "images/shampoo.jpg",
      rating: 4.9,
      reviewsCount: 384,
      badge: "Best Seller",
      badgeClass: "badge-bestseller",
      desc: "Gentle botanical cleanser that clears impurities and styling buildup without stripping essential natural lipids.",
      actives: "Cold-pressed Camellia, Green Tea Polyphenols, Coconut Glucosides",
      directions: "Lather a quarter-sized amount into wet roots, massage scalp for 60 seconds, and rinse with warm water."
    },
    {
      id: "conditioner",
      name: "Hydrating Conditioner",
      category: "cleanse",
      categoryLabel: "Step 02 • Hydrate",
      price: 30,
      img: "images/conditioner.jpg",
      rating: 4.9,
      reviewsCount: 312,
      badge: "Award Winner",
      badgeClass: "badge-award",
      desc: "Deep moisture therapy infused with plant proteins that seal the outer cuticle for instant slip and mirror shine.",
      actives: "Japanese Camellia Oil, Hydrolyzed Rice Protein, Shea Ester",
      directions: "Work generously from mid-lengths to ends on clean, damp strands. Leave for 3 minutes before rinsing with cool water."
    },
    {
      id: "clarifying-rinse",
      name: "Clarifying Herbal Scalp Rinse",
      category: "cleanse",
      categoryLabel: "Weekly Reset",
      price: 26,
      img: "images/clarifying-rinse.jpg",
      rating: 4.8,
      reviewsCount: 142,
      badge: "New Arrival",
      badgeClass: "badge-new",
      desc: "Targeted botanical acid wash powered by fermented apple cider and thyme to restore scalp pH and melt away hard water residue.",
      actives: "Organic Apple Cider Vinegar, Thyme Extract, Peppermint Leaf Oil",
      directions: "Use once weekly in place of shampoo. Apply nozzle directly to wet scalp, let sit for 2 minutes, and rinse thoroughly."
    },
    {
      id: "cowash-cream",
      name: "Gentle Co-Wash Cleansing Cream",
      category: "cleanse",
      categoryLabel: "Low-Foam Wash",
      price: 29,
      img: "images/cowash-cream.jpg",
      rating: 4.8,
      reviewsCount: 98,
      badge: "Trending",
      badgeClass: "badge-trending",
      desc: "Ultra-hydrating 2-in-1 conditioning wash designed specifically for curls, coils, and dry color-treated hair.",
      actives: "Raw Coconut Cream, Jojoba Golden Wax, Aloe Barbadensis Leaf Juice",
      directions: "Apply liberally to wet hair and scalp. Massage thoroughly, detangle with fingers, and rinse completely."
    },
    {
      id: "serum",
      name: "Hair Growth Serum",
      category: "treatments",
      categoryLabel: "Step 03 • Revitalize",
      price: 36,
      img: "images/serum.jpg",
      rating: 5.0,
      reviewsCount: 462,
      badge: "Best Seller",
      badgeClass: "badge-bestseller",
      desc: "Concentrated leave-in scalp elixir enriched with clinical biotin peptides to stimulate microcirculation and thicken fine strands.",
      actives: "Biotinoyl Tripeptide-1, Caffeine, Centella Asiatica Extract",
      directions: "Apply 4 to 6 drops directly onto towel-dried or dry scalp nightly. Gently massage with fingertips; do not rinse."
    },
    {
      id: "avocado-mask",
      name: "Avocado Butter Deep Moisture Mask",
      category: "treatments",
      categoryLabel: "Intensive Repair",
      price: 38,
      img: "images/avocado-mask.jpg",
      rating: 4.9,
      reviewsCount: 285,
      badge: "Top Rated",
      badgeClass: "badge-award",
      desc: "Rich buttery treatment that floods parched fibers with lipid-replenishing fatty acids to eliminate chronic breakage and frizz.",
      actives: "Cold-Pressed Avocado Butter, Meadowfoam Seed Oil, Vitamin E",
      directions: "Smooth through freshly washed hair from roots to ends. Leave for 10-15 minutes (or with warm towel wrap) and rinse."
    },
    {
      id: "rosemary-oil",
      name: "Rosemary & Biotin Scalp Oil",
      category: "treatments",
      categoryLabel: "Follicle Therapy",
      price: 34,
      img: "images/rosemary-oil.jpg",
      rating: 4.9,
      reviewsCount: 390,
      badge: "Trending",
      badgeClass: "badge-trending",
      desc: "Potent traditional herbal infusion of Spanish rosemary and castor oil formulated to awaken dormant follicles and soothe itchy scalps.",
      actives: "Pure Steam-Distilled Rosemary Oil, Cold-Pressed Castor Oil, Vitamin B7",
      directions: "Section hair and apply directly to scalp 2-3 hours prior to washing, or leave as an overnight deep restorative treatment."
    },
    {
      id: "bond-repair",
      name: "Botanical Bond Repair Treatment",
      category: "treatments",
      categoryLabel: "Cuticle Rebuilder",
      price: 42,
      img: "images/bond-repair.jpg",
      rating: 4.9,
      reviewsCount: 175,
      badge: "Award Winner",
      badgeClass: "badge-award",
      desc: "Plant-derived cross-linking complex that rebuilds broken hydrogen and ionic bonds caused by bleaching, heat, and UV stress.",
      actives: "Chia Seed Biomimetic Complex, Vegan Keratin, Baobab Amino Acids",
      directions: "Apply to damp hair from roots to ends before shampooing. Leave on for 15 minutes, then wash and condition as normal."
    },
    {
      id: "smoothing-milk",
      name: "Leave-in Smoothing Milk",
      category: "leavein",
      categoryLabel: "Daily Weightless Moisture",
      price: 27,
      img: "images/smoothing-milk.jpg",
      rating: 4.8,
      reviewsCount: 224,
      badge: "Best Seller",
      badgeClass: "badge-bestseller",
      desc: "Ultra-light conditioning emulsion that detangles knots instantly, blocks humidity-induced puffiness, and restores softness.",
      actives: "Oat Milk Kernel Extract, Marshmallow Root, Hydrolyzed Quinoa",
      directions: "Mist 3-5 pumps through damp hair before air drying or blow styling. Comb through for even distribution."
    },
    {
      id: "heat-protectant",
      name: "Botanical Heat Protectant Mist",
      category: "leavein",
      categoryLabel: "450°F Thermal Defense",
      price: 25,
      img: "images/heat-protectant.jpg",
      rating: 4.8,
      reviewsCount: 168,
      badge: "Essential",
      badgeClass: "badge-trending",
      desc: "Weightless thermal barrier defending delicate keratin structures up to 450°F / 230°C while infusing brilliant glass-like shine.",
      actives: "Bamboo Silica, Horsetail Herb, Sunflower Seed Extract",
      directions: "Shake well. Mist evenly across dry or damp hair sections before blow drying, curling, or flat ironing."
    },
    {
      id: "rosewater-mist",
      name: "Rosewater Scalp Hydration Mist",
      category: "leavein",
      categoryLabel: "Day 2 Scalp & Curl Dew",
      price: 24,
      img: "images/rosewater-mist.jpg",
      rating: 4.9,
      reviewsCount: 119,
      badge: "New Arrival",
      badgeClass: "badge-new",
      desc: "Pure Damask rose floral hydrosol with hyaluronic moisture traps to revive sleepy curls, soothe midday tightness, and freshen hair.",
      actives: "100% Pure Rosa Damascena Hydrosol, Multi-Molecular Hyaluronic Acid, Aloe",
      directions: "Spray liberally directly onto scalp and hair anytime during the day for an instant boost of calm and botanical aromatics."
    },
    {
      id: "argan-drops",
      name: "Pure Argan Gloss Drops",
      category: "leavein",
      categoryLabel: "Mirror Shine Finish",
      price: 32,
      img: "images/argan-drops.jpg",
      rating: 4.9,
      reviewsCount: 308,
      badge: "Top Rated",
      badgeClass: "badge-award",
      desc: "100% pure organic cold-pressed Moroccan Argan elixir that seals split ends, reflects natural ambient light, and eliminates flyaways.",
      actives: "First-Cold-Pressed Organic Argania Spinosa Oil, Squalane",
      directions: "Warm 2-3 drops between palms and gently smooth over styled dry hair, concentrating on ends."
    },
    {
      id: "scalp-massager",
      name: "Silicone Scalp Stimulating Brush",
      category: "tools",
      categoryLabel: "In-Shower Ritual Tool",
      price: 16,
      img: "images/scalp-massager.jpg",
      rating: 4.9,
      reviewsCount: 450,
      badge: "Trending",
      badgeClass: "badge-trending",
      desc: "Ergonomic medical-grade silicone brush that increases scalp circulation, boosts shampoo lather, and lifts dead surface cells.",
      actives: "BPA-Free 100% Medical Grade Soft Flexible Silicone",
      directions: "Use in circular motions on lathered scalp in the shower, or with Rosemary Scalp Oil during evening ritual."
    },
    {
      id: "silk-scrunchie",
      name: "Mulberry Silk Sleep Scrunchie Set",
      category: "tools",
      categoryLabel: "Anti-Breakage Silk",
      price: 22,
      img: "images/silk-scrunchie.jpg",
      rating: 5.0,
      reviewsCount: 280,
      badge: "Best Seller",
      badgeClass: "badge-bestseller",
      desc: "Set of 3 luxury 22-Momme Grade 6A Mulberry Silk scrunchies designed to prevent friction creases, split ends, and hair breakage.",
      actives: "100% Pure 22-Momme Long-Strand Grade 6A Mulberry Silk",
      directions: "Tie hair gently in a loose bun or pineapple braid before sleep or during workouts for zero-friction hold."
    }
  ];

  // ==========================================================================
  // 2. Exploration, Search, Filter & Render Logic
  // ==========================================================================
  const productsGrid = document.getElementById('productsGrid');
  const searchInput = document.getElementById('productSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const sortSelect = document.getElementById('productSortSelect');
  const categoryPills = document.querySelectorAll('.category-pill');
  const noProductsFound = document.getElementById('noProductsFound');
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');

  let currentCategory = 'all';
  let currentSearchQuery = '';
  let currentSort = 'featured';

  function renderProducts() {
    if (!productsGrid) return;

    // 1. Filter by category
    let list = productsData.filter(p => {
      if (currentCategory === 'all') return true;
      return p.category === currentCategory;
    });

    // 2. Filter by search text
    if (currentSearchQuery) {
      const q = currentSearchQuery.toLowerCase();
      list = list.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.actives.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q)
      );
    }

    // 3. Sort
    if (currentSort === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'rating') {
      list.sort((a, b) => b.rating - a.rating || b.reviewsCount - a.reviewsCount);
    }

    // Toggle Empty State
    if (list.length === 0) {
      productsGrid.innerHTML = '';
      if (noProductsFound) noProductsFound.style.display = 'block';
      return;
    } else {
      if (noProductsFound) noProductsFound.style.display = 'none';
    }

    // Render Cards
    productsGrid.innerHTML = list.map(p => `
      <div class="product-card" data-id="${p.id}">
        <span class="product-badge-tag ${p.badgeClass}">${p.badge}</span>
        
        <div class="product-image-box">
          <img src="${p.img}" class="swatch" alt="${p.name} bottle">
          <button class="quick-view-overlay-btn" data-id="${p.id}">Quick View</button>
        </div>

        <div class="product-info">
          <span class="product-category">${p.categoryLabel}</span>
          <h3 class="product-title">${p.name}</h3>
          
          <div class="product-rating-row">
            <span class="product-rating-stars">★★★★★</span>
            <span>${p.rating.toFixed(1)} (${p.reviewsCount})</span>
          </div>

          <p class="product-desc">${p.desc}</p>

          <div class="product-footer">
            <span class="product-price">$${p.price.toFixed(2)}</span>
            <button class="add-btn" data-name="${p.name}" data-price="${p.price}" data-img="${p.img}">Add to cart</button>
          </div>
        </div>
      </div>
    `).join('');

    // Attach click listeners to newly rendered elements
    attachProductListeners();
  }

  function attachProductListeners() {
    // Add to cart buttons
    productsGrid.querySelectorAll('.add-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const name = btn.dataset.name;
        const price = parseFloat(btn.dataset.price);
        const img = btn.dataset.img;
        addItemToCart(name, price, img, 1);
      });
    });

    // Quick View buttons and image clicks
    productsGrid.querySelectorAll('.quick-view-overlay-btn, .product-image-box img').forEach(el => {
      el.addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        const id = card?.dataset.id;
        if (id) openQuickView(id);
      });
    });
  }

  // Category Pill Listeners
  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.dataset.category || 'all';
      renderProducts();
    });
  });

  // Search Input Listener
  searchInput?.addEventListener('input', (e) => {
    currentSearchQuery = e.target.value.trim();
    if (clearSearchBtn) {
      clearSearchBtn.style.display = currentSearchQuery ? 'block' : 'none';
    }
    renderProducts();
  });

  clearSearchBtn?.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    currentSearchQuery = '';
    clearSearchBtn.style.display = 'none';
    renderProducts();
  });

  // Sort Select Listener
  sortSelect?.addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderProducts();
  });

  // Reset Filters
  resetFiltersBtn?.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    currentSearchQuery = '';
    if (clearSearchBtn) clearSearchBtn.style.display = 'none';
    currentCategory = 'all';
    categoryPills.forEach(p => p.classList.toggle('active', p.dataset.category === 'all'));
    renderProducts();
  });


  // ==========================================================================
  // 3. Product Quick View Modal
  // ==========================================================================
  const quickViewModal = document.getElementById('quickViewModal');
  const quickViewBackdrop = document.getElementById('quickViewBackdrop');
  const quickViewCloseBtn = document.getElementById('quickViewCloseBtn');
  const quickViewBody = document.getElementById('quickViewBody');

  let currentQuickViewQty = 1;

  function openQuickView(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product || !quickViewBody) return;

    currentQuickViewQty = 1;
    quickViewBody.innerHTML = `
      <div class="qv-image-box">
        <img src="${product.img}" alt="${product.name}">
      </div>

      <div class="qv-info-box">
        <span class="qv-category">${product.categoryLabel}</span>
        <h2 class="qv-title">${product.name}</h2>

        <div class="qv-rating-strip">
          <span class="product-rating-stars">★★★★★</span>
          <strong>${product.rating.toFixed(1)}</strong>
          <span style="color: var(--color-text-muted);">(${product.reviewsCount} customer reviews)</span>
        </div>

        <div class="qv-price">$${product.price.toFixed(2)}</div>

        <p class="qv-desc">${product.desc}</p>

        <div class="qv-actives-box">
          <strong>🌿 Key Botanical Actives</strong>
          <p>${product.actives}</p>
        </div>

        <div class="qv-directions">
          <strong>✨ Ritual Application:</strong> ${product.directions}
        </div>

        <div class="qv-cta-row">
          <div class="qv-qty-selector">
            <button class="qv-qty-btn" id="qvQtyMinus">−</button>
            <span class="qv-qty-val" id="qvQtyDisplay">1</span>
            <button class="qv-qty-btn" id="qvQtyPlus">+</button>
          </div>
          <button class="btn btn-primary" id="qvAddToCartBtn" style="flex-grow: 1;">
            Add to Bag • $${product.price.toFixed(2)}
          </button>
        </div>
      </div>
    `;

    // Quantity controls inside modal
    const minusBtn = document.getElementById('qvQtyMinus');
    const plusBtn = document.getElementById('qvQtyPlus');
    const qtyDisplay = document.getElementById('qvQtyDisplay');
    const addBtn = document.getElementById('qvAddToCartBtn');

    minusBtn?.addEventListener('click', () => {
      if (currentQuickViewQty > 1) {
        currentQuickViewQty--;
        qtyDisplay.textContent = currentQuickViewQty;
        addBtn.textContent = `Add to Bag • $${(product.price * currentQuickViewQty).toFixed(2)}`;
      }
    });

    plusBtn?.addEventListener('click', () => {
      currentQuickViewQty++;
      qtyDisplay.textContent = currentQuickViewQty;
      addBtn.textContent = `Add to Bag • $${(product.price * currentQuickViewQty).toFixed(2)}`;
    });

    addBtn?.addEventListener('click', () => {
      addItemToCart(product.name, product.price, product.img, currentQuickViewQty);
      closeQuickView();
    });

    quickViewModal?.classList.add('open');
    quickViewBackdrop?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeQuickView() {
    quickViewModal?.classList.remove('open');
    quickViewBackdrop?.classList.remove('open');
    document.body.style.overflow = '';
  }

  quickViewCloseBtn?.addEventListener('click', closeQuickView);
  quickViewBackdrop?.addEventListener('click', closeQuickView);


  // ==========================================================================
  // 4. Cart State & Slide-out Drawer Logic
  // ==========================================================================
  let cart = [];
  const FREE_SHIPPING_THRESHOLD = 50;

  // Restore cart from localStorage
  try {
    const saved = localStorage.getItem('glow_cart');
    if (saved) cart = JSON.parse(saved);
  } catch (e) {
    cart = [];
  }

  const cartDrawer = document.getElementById('cartDrawer');
  const cartBackdrop = document.getElementById('cartBackdrop');
  const cartItemsContainer = document.getElementById('cartItems');
  const cartSubtotalEl = document.getElementById('cartSubtotal');
  const cartHeaderCount = document.getElementById('cartHeaderCount');
  const shippingMsg = document.getElementById('shippingMessage');
  const shippingFill = document.getElementById('shippingFill');
  const checkoutBtn = document.getElementById('checkoutBtn');

  function openCart() {
    if (cartDrawer && cartBackdrop) {
      cartDrawer.classList.add('open');
      cartBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCart() {
    if (cartDrawer && cartBackdrop) {
      cartDrawer.classList.remove('open');
      cartBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  document.getElementById('cartCloseBtn')?.addEventListener('click', closeCart);
  cartBackdrop?.addEventListener('click', closeCart);
  document.getElementById('cartBtn')?.addEventListener('click', openCart);

  function addItemToCart(name, price, img, qty = 1) {
    const existing = cart.find(item => item.name === name);
    if (existing) {
      existing.quantity += qty;
    } else {
      cart.push({ name, price: parseFloat(price), img, quantity: qty });
    }

    saveCart();
    updateCartUI();
    openCart();
    showToast(`${name} added to your ritual!`);
  }

  function saveCart() {
    try {
      localStorage.setItem('glow_cart', JSON.stringify(cart));
    } catch (e) {}
  }

  function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountEl = document.getElementById('cartCount');
    if (cartCountEl) cartCountEl.textContent = totalCount;
    if (cartHeaderCount) cartHeaderCount.textContent = `${totalCount} ${totalCount === 1 ? 'item' : 'items'}`;

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    if (cartSubtotalEl) cartSubtotalEl.textContent = `$${subtotal.toFixed(2)}`;

    // Free Shipping Progress
    if (shippingMsg && shippingFill) {
      if (subtotal >= FREE_SHIPPING_THRESHOLD) {
        shippingMsg.innerHTML = '🎉 You unlocked <strong>FREE Shipping!</strong>';
        shippingFill.style.width = '100%';
      } else {
        const remaining = (FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2);
        shippingMsg.innerHTML = `Add $${remaining} more for <strong>FREE Shipping</strong>`;
        const pct = Math.min(100, Math.max(0, (subtotal / FREE_SHIPPING_THRESHOLD) * 100));
        shippingFill.style.width = `${pct}%`;
      }
    }

    // Render items list
    if (!cartItemsContainer) return;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="cart-empty" id="cartEmpty">
          <div class="empty-icon">🌿</div>
          <h4>Your ritual bag is empty</h4>
          <p>Explore our botanical formulas and find your daily hair ritual.</p>
          <button class="btn btn-primary btn-sm" id="cartShopBtnEmpty">Explore Formulas</button>
        </div>
      `;
      document.getElementById('cartShopBtnEmpty')?.addEventListener('click', () => {
        closeCart();
        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
      });
      if (checkoutBtn) checkoutBtn.disabled = true;
    } else {
      if (checkoutBtn) checkoutBtn.disabled = false;
      cartItemsContainer.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
          <img src="${item.img}" alt="${item.name}" class="cart-item-img">
          <div class="cart-item-info">
            <h4>${item.name}</h4>
            <div class="cart-item-price">$${item.price.toFixed(2)}</div>
            <div class="cart-qty-controls">
              <button class="qty-btn" data-action="decrease" data-index="${index}">−</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" data-action="increase" data-index="${index}">+</button>
            </div>
          </div>
          <button class="cart-item-remove" data-action="remove" data-index="${index}" title="Remove item">&times;</button>
        </div>
      `).join('');
    }
  }

  // Cart Stepper delegation
  cartItemsContainer?.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-action]');
    if (!btn) return;
    const action = btn.dataset.action;
    const index = parseInt(btn.dataset.index, 10);
    if (isNaN(index) || !cart[index]) return;

    if (action === 'increase') {
      cart[index].quantity++;
    } else if (action === 'decrease') {
      cart[index].quantity--;
      if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
      }
    } else if (action === 'remove') {
      cart.splice(index, 1);
    }

    saveCart();
    updateCartUI();
  });

  // Checkout Interaction
  checkoutBtn?.addEventListener('click', () => {
    if (cart.length === 0) return;
    const orig = checkoutBtn.innerText;
    checkoutBtn.innerText = 'Redirecting to Checkout...';
    setTimeout(() => {
      const totalQty = cart.reduce((s, i) => s + i.quantity, 0);
      const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0).toFixed(2);
      alert(`Proceeding to checkout with ${totalQty} items (Total: $${subtotal})!`);
      checkoutBtn.innerText = orig;
    }, 500);
  });

  // Toast Notification
  function showToast(msg) {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => toast.classList.remove('show'), 2000);
  }


  // ==========================================================================
  // 5. Hair Care Chatbot ("Ask Me for Your Hair Care")
  // ==========================================================================
  const chatLauncherBtn = document.getElementById('chatLauncherBtn');
  const chatWindow = document.getElementById('chatWindow');
  const chatCloseWindowBtn = document.getElementById('chatCloseWindowBtn');
  const chatInputForm = document.getElementById('chatInputForm');
  const chatInput = document.getElementById('chatInput');
  const chatMessages = document.getElementById('chatMessages');

  function toggleChat() {
    if (chatWindow) {
      chatWindow.classList.toggle('open');
      if (chatWindow.classList.contains('open')) {
        chatInput?.focus();
      }
    }
  }

  chatLauncherBtn?.addEventListener('click', toggleChat);
  chatCloseWindowBtn?.addEventListener('click', toggleChat);

  function appendBotMessage(textHtml, productId = null) {
    if (!chatMessages) return;
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble bot-bubble';
    
    let productCardHtml = '';
    if (productId) {
      const p = productsData.find(item => item.id === productId);
      if (p) {
        productCardHtml = `
          <div class="chat-product-box">
            <img src="${p.img}" alt="${p.name}" class="chat-product-img">
            <div class="chat-product-details">
              <h5>${p.name}</h5>
              <div class="chat-product-price">$${p.price.toFixed(2)}</div>
              <button class="chat-add-btn" data-name="${p.name}" data-price="${p.price}" data-img="${p.img}">+ Add to Bag</button>
            </div>
          </div>
        `;
      }
    }

    bubble.innerHTML = `
      <div class="bubble-content">
        ${textHtml}
        ${productCardHtml}
      </div>
    `;
    chatMessages.appendChild(bubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    if (productCardHtml) {
      bubble.querySelector('.chat-add-btn')?.addEventListener('click', (e) => {
        const btn = e.target;
        addItemToCart(btn.dataset.name, parseFloat(btn.dataset.price), btn.dataset.img, 1);
      });
    }
  }

  function appendUserMessage(text) {
    if (!chatMessages) return;
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble user-bubble';
    bubble.innerHTML = `<div class="bubble-content"><p>${text}</p></div>`;
    chatMessages.appendChild(bubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function handleUserQuery(query) {
    const q = query.toLowerCase().trim();
    if (!q) return;

    appendUserMessage(query);

    setTimeout(() => {
      if (q.includes('shine') || q.includes('smooth') || q.includes('glow') || q.includes('argan') || q.includes('glass')) {
        appendBotMessage(
          "<p>For <strong>mirror-like glass shine & smoothness</strong>, our <em>Pure Argan Gloss Drops</em> seals cuticles and reflects light without heavy grease. 🌟</p>",
          "argan-drops"
        );
      } else if (q.includes('growth') || q.includes('grow') || q.includes('rosemary') || q.includes('thin') || q.includes('density') || q.includes('scalp oil')) {
        appendBotMessage(
          "<p>For <strong>follicle stimulation & root density</strong>, we recommend alternating our <em>Hair Growth Serum</em> nightly and <em>Rosemary & Biotin Scalp Oil</em> weekly! 🌱</p>",
          "rosemary-oil"
        );
      } else if (q.includes('mask') || q.includes('deep moisture') || q.includes('dry') || q.includes('frizz') || q.includes('damage') || q.includes('break')) {
        appendBotMessage(
          "<p>To <strong>repair deep dryness and stop breakage</strong>, our <em>Avocado Butter Deep Moisture Mask</em> drenches damaged fibers with restorative fatty acids. 🥑</p>",
          "avocado-mask"
        );
      } else if (q.includes('heat') || q.includes('flat iron') || q.includes('blow') || q.includes('protect')) {
        appendBotMessage(
          "<p>Before styling with heat, spray our <em>Botanical Heat Protectant Mist</em> to shield hair up to 450°F / 230°C! 🛡️</p>",
          "heat-protectant"
        );
      } else if (q.includes('curl') || q.includes('co-wash') || q.includes('cowash')) {
        appendBotMessage(
          "<p>For <strong>soft bouncy curls</strong> without stripping moisture, try our low-foam <em>Gentle Co-Wash Cleansing Cream</em>! 🥥</p>",
          "cowash-cream"
        );
      } else if (q.includes('brush') || q.includes('massager') || q.includes('tool')) {
        appendBotMessage(
          "<p>Our <em>Silicone Scalp Stimulating Brush</em> elevates your shower lather and stimulates follicle blood flow! 💆‍♀️</p>",
          "scalp-massager"
        );
      } else if (q.includes('shampoo') || q.includes('cleanse')) {
        appendBotMessage(
          "<p>Our <em>Nourishing Shampoo</em> delivers daily gentle purification with antioxidant green tea and camellia. 🌿</p>",
          "shampoo"
        );
      } else if (q.includes('silk') || q.includes('sleep') || q.includes('pillow') || q.includes('scrunchie')) {
        appendBotMessage(
          "<p>Protect hair overnight with our 100% 22-Momme <em>Mulberry Silk Sleep Scrunchie Set</em>! 🎀</p>",
          "silk-scrunchie"
        );
      } else if (q.includes('shipping') || q.includes('delivery')) {
        appendBotMessage(
          "<p>📦 We provide <strong>FREE standard shipping on all orders over $50</strong>! Delivery takes 2-4 business days.</p>"
        );
      } else {
        appendBotMessage(
          "<p>Thank you for asking! We have <strong>14 botanical formulas</strong> for cleanse, deep masks, growth, and styling mists. What is your primary hair concern today? 🌿</p>",
          "serum"
        );
      }
    }, 450);
  }

  // Quick Chips
  document.querySelectorAll('.chat-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      handleUserQuery(chip.dataset.query);
    });
  });

  // Chat Form
  chatInputForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const q = chatInput.value.trim();
    if (q) {
      handleUserQuery(q);
      chatInput.value = '';
    }
  });


  // ==========================================================================
  // 6. Community Feedback & Experience Poll
  // ==========================================================================
  const starBtns = document.querySelectorAll('.star-btn');
  const selectedRatingInput = document.getElementById('selectedRating');
  const ratingCaption = document.getElementById('ratingCaption');

  const ratingCaptions = {
    1: "1.0 - Needs Work",
    2: "2.0 - Fair",
    3: "3.0 - Good",
    4: "4.0 - Great Experience",
    5: "5.0 - Exceptional"
  };

  starBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const rating = parseInt(btn.dataset.rating, 10);
      selectedRatingInput.value = rating;
      if (ratingCaption) ratingCaption.textContent = ratingCaptions[rating] || `${rating}.0`;

      starBtns.forEach(b => {
        const bRating = parseInt(b.dataset.rating, 10);
        if (bRating <= rating) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });
    });
  });

  const communityPollForm = document.getElementById('communityPollForm');
  const pollFormContainer = document.getElementById('pollFormContainer');
  const pollSuccessBox = document.getElementById('pollSuccessBox');
  const totalVotesCountEl = document.getElementById('totalVotesCount');
  const reviewsStream = document.getElementById('reviewsStream');

  let pollVotes = {
    mask: 685,
    scrub: 386,
    mist: 229,
    milk: 128
  };

  function updatePollBars() {
    const sum = pollVotes.mask + pollVotes.scrub + pollVotes.mist + pollVotes.milk;
    if (totalVotesCountEl) totalVotesCountEl.textContent = sum.toLocaleString();

    const pMask = Math.round((pollVotes.mask / sum) * 100);
    const pScrub = Math.round((pollVotes.scrub / sum) * 100);
    const pMist = Math.round((pollVotes.mist / sum) * 100);
    const pMilk = Math.round((pollVotes.milk / sum) * 100);

    const bMask = document.getElementById('barMask');
    const bScrub = document.getElementById('barScrub');
    const bMist = document.getElementById('barMist');
    const bMilk = document.getElementById('barMilk');

    if (bMask) bMask.style.width = pMask + '%';
    if (bScrub) bScrub.style.width = pScrub + '%';
    if (bMist) bMist.style.width = pMist + '%';
    if (bMilk) bMilk.style.width = pMilk + '%';

    document.getElementById('pctMask').innerHTML = `${pMask}% (<span id="countMask">${pollVotes.mask}</span>)`;
    document.getElementById('pctScrub').innerHTML = `${pScrub}% (<span id="countScrub">${pollVotes.scrub}</span>)`;
    document.getElementById('pctMist').innerHTML = `${pMist}% (<span id="countMist">${pollVotes.mist}</span>)`;
    document.getElementById('pctMilk').innerHTML = `${pMilk}% (<span id="countMilk">${pollVotes.milk}</span>)`;
  }

  communityPollForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const votedProduct = document.querySelector('input[name="nextProductVote"]:checked')?.value || 'mask';
    const hair = document.querySelector('input[name="hairProfile"]:checked')?.value || 'Wavy';
    const comment = document.getElementById('pollFeedback')?.value.trim();
    const rating = selectedRatingInput?.value || '5';

    if (pollVotes[votedProduct] !== undefined) {
      pollVotes[votedProduct]++;
    }
    updatePollBars();

    if (comment && reviewsStream) {
      const newCard = document.createElement('div');
      newCard.className = 'review-mini-card';
      const stars = '★'.repeat(parseInt(rating, 10));
      newCard.innerHTML = `
        <div class="review-mini-header">
          <strong>You (Verified Visitor)</strong>
          <span class="review-badge">${hair} Hair</span>
          <span class="review-rating">${stars}</span>
        </div>
        <p>"${comment}"</p>
      `;
      reviewsStream.insertBefore(newCard, reviewsStream.firstChild);
    }

    pollFormContainer.style.display = 'none';
    pollSuccessBox.style.display = 'block';
    showToast('🎉 Review submitted! 10% coupon unlocked.');
  });

  document.getElementById('voteAgainBtn')?.addEventListener('click', () => {
    pollSuccessBox.style.display = 'none';
    pollFormContainer.style.display = 'block';
    communityPollForm.reset();
  });

  document.getElementById('copyCouponBtn')?.addEventListener('click', () => {
    navigator.clipboard.writeText('GLOW10').then(() => {
      const btn = document.getElementById('copyCouponBtn');
      if (btn) {
        btn.textContent = 'Copied! ✓';
        setTimeout(() => btn.textContent = 'Copy Code', 2000);
      }
      showToast('GLOW10 copied to clipboard!');
    });
  });


  // ==========================================================================
  // 7. Glow Check & Header Scroll Shadow
  // ==========================================================================
  const quizButtons = document.querySelectorAll('.quiz-btn');
  const quizResult = document.getElementById('quizResult');

  quizButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      quizButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      if (quizResult) {
        quizResult.style.opacity = '0';
        setTimeout(() => {
          quizResult.textContent = btn.dataset.result;
          quizResult.style.opacity = '1';
        }, 150);
      }
    });
  });

  let liveCount = 142;
  setInterval(() => {
    liveCount += Math.floor(Math.random() * 3) - 1;
    if (liveCount < 130) liveCount = 135;
    const countEl = document.getElementById('liveCount');
    if (countEl) countEl.textContent = liveCount;
  }, 4000);

  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
    } else {
      header.style.boxShadow = 'none';
    }
  });

  // Initial Boot
  renderProducts();
  updateCartUI();


  // ==========================================================================
  // 8. Beautician Protocols & Virtual Consultation Booking
  // ==========================================================================
  const protocolsData = {
    growth: {
      title: "Follicle Density & Growth Protocol",
      expert: "Curated by Dr. Elena Rostova, MD (Clinical Trichologist)",
      savings: "Save 15% ($14.70 off)",
      origPrice: 98.00,
      bundlePrice: 83.30,
      productIds: ["rosemary-oil", "serum", "scalp-massager"],
      steps: [
        {
          num: "Step 01",
          name: "Rosemary & Biotin Scalp Oil",
          timing: "Weekly Pre-Wash (30-60 mins)",
          img: "images/rosemary-oil.jpg",
          desc: "Apply 6 drops directly onto scalp. Stimulates blood microcirculation and loosens dry cellular debris."
        },
        {
          num: "Step 02",
          name: "Silicone Scalp Stimulating Brush",
          timing: "In-Shower Scalp Activation",
          img: "images/scalp-massager.jpg",
          desc: "Use in gentle circular motions to deep-clean follicle openings and maximize botanical nutrient absorption."
        },
        {
          num: "Step 03",
          name: "Hair Growth Serum",
          timing: "Every Night Before Sleep",
          img: "images/serum.jpg",
          desc: "Leave-in concentrated biotin peptide elixir. Feeds follicle matrix to actively promote thicker strand density."
        }
      ]
    },
    frizz: {
      title: "Ultra-Gloss & Anti-Frizz Protocol",
      expert: "Curated by Camille Laurent (Master Texture Stylist)",
      savings: "Save 15% ($14.10 off)",
      origPrice: 94.00,
      bundlePrice: 79.90,
      productIds: ["cowash-cream", "avocado-mask", "smoothing-milk"],
      steps: [
        {
          num: "Step 01",
          name: "Gentle Co-Wash Cleansing Cream",
          timing: "Daily or Alternate Day Cleanse",
          img: "images/cowash-cream.jpg",
          desc: "Cleanses roots without lifting cuticle scales. Locks in essential moisture for natural wave and curl bounce."
        },
        {
          num: "Step 02",
          name: "Avocado Butter Deep Moisture Mask",
          timing: "Weekly 10-Minute Deep Treatment",
          img: "images/avocado-mask.jpg",
          desc: "Inundates inner hair cortex with lipid-rich fatty acids to erase frizz, porosity gaps, and brittle texture."
        },
        {
          num: "Step 03",
          name: "Leave-in Smoothing Milk",
          timing: "Post-Wash Damp Application",
          img: "images/smoothing-milk.jpg",
          desc: "Lightweight detangling emulsion that seals outer cuticle layers and defends against ambient humidity."
        }
      ]
    },
    gloss: {
      title: "Scalp Detox & Mirror Gloss Protocol",
      expert: "Curated by Aria Chen, L.Ac (Holistic Formulator)",
      savings: "Save 15% ($12.30 off)",
      origPrice: 82.00,
      bundlePrice: 69.70,
      productIds: ["clarifying-rinse", "conditioner", "argan-drops"],
      steps: [
        {
          num: "Step 01",
          name: "Clarifying Herbal Scalp Rinse",
          timing: "Weekly Scalp & Strand Clarifier",
          img: "images/clarifying-rinse.jpg",
          desc: "Organic apple cider vinegar removes dulling calcium buildup, restores scalp microbiome, and flattens cuticles."
        },
        {
          num: "Step 02",
          name: "Hydrating Conditioner",
          timing: "Every Wash Conditioner",
          img: "images/conditioner.jpg",
          desc: "Cold-pressed camellia oil replenishes essential moisture and smoothens strands for effortless detangling."
        },
        {
          num: "Step 03",
          name: "Pure Argan Gloss Drops",
          timing: "Dry Hair Styling Finish",
          img: "images/argan-drops.jpg",
          desc: "2-3 drops warmed in hands and smoothed over ends. Delivers instant mirror light reflection and flyaway control."
        }
      ]
    }
  };

  const protocolBody = document.getElementById('protocolBody');
  const protocolTabs = document.querySelectorAll('.protocol-tab');

  function renderProtocol(key) {
    const p = protocolsData[key];
    if (!p || !protocolBody) return;

    protocolBody.innerHTML = `
      <div style="margin-bottom: 1rem;">
        <span style="font-size: 0.82rem; color: var(--color-primary); font-weight: 700; text-transform: uppercase;">${p.expert}</span>
        <h4 style="font-family: var(--font-heading); font-size: 1.4rem; margin-top: 2px;">${p.title}</h4>
      </div>

      <div class="protocol-steps-grid">
        ${p.steps.map(s => `
          <div class="protocol-step-card">
            <span class="step-num-pill">${s.num}</span>
            <img src="${s.img}" alt="${s.name}" class="step-product-img">
            <h4>${s.name}</h4>
            <span class="step-timing">${s.timing}</span>
            <p>${s.desc}</p>
          </div>
        `).join('')}
      </div>

      <div class="protocol-bundle-row">
        <div>
          <div class="bundle-pricing">
            <span class="bundle-total">$${p.bundlePrice.toFixed(2)}</span>
            <span class="bundle-orig">$${p.origPrice.toFixed(2)}</span>
            <span class="bundle-savings-tag">${p.savings}</span>
          </div>
          <small style="color: var(--color-text-muted); font-size: 0.8rem;">Includes all 3 full-size specialist formulas with Free Standard Shipping.</small>
        </div>
        <button class="btn btn-primary add-protocol-bundle-btn" data-protocol="${key}">
          Add Complete Protocol to Bag • $${p.bundlePrice.toFixed(2)}
        </button>
      </div>
    `;

    // Attach listener to bundle button
    protocolBody.querySelector('.add-protocol-bundle-btn')?.addEventListener('click', () => {
      p.productIds.forEach(pid => {
        const prod = productsData.find(item => item.id === pid);
        if (prod) {
          const existing = cart.find(item => item.name === prod.name);
          if (existing) {
            existing.quantity++;
          } else {
            cart.push({ name: prod.name, price: prod.price, img: prod.img, quantity: 1 });
          }
        }
      });
      saveCart();
      updateCartUI();
      openCart();
      showToast(`Added ${p.title} bundle to your ritual!`);
    });
  }

  // Protocol tab click listeners
  protocolTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      protocolTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderProtocol(tab.dataset.tab);
    });
  });

  // Routine View buttons on expert cards
  document.querySelectorAll('.routine-view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const protoKey = btn.dataset.protocol;
      protocolTabs.forEach(t => t.classList.toggle('active', t.dataset.tab === protoKey));
      renderProtocol(protoKey);
      document.getElementById('specialistProtocols')?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Initial render protocol
  renderProtocol('growth');

  // Consultation Modal Logic
  const consultModal = document.getElementById('consultModal');
  const consultBackdrop = document.getElementById('consultBackdrop');
  const consultCloseBtn = document.getElementById('consultCloseBtn');
  const consultForm = document.getElementById('consultForm');
  const consultSpecialistSelect = document.getElementById('consultSpecialist');
  const consultSuccessBox = document.getElementById('consultSuccessBox');
  const consultSummaryCard = document.getElementById('consultSummaryCard');
  const closeConsultSuccessBtn = document.getElementById('closeConsultSuccessBtn');

  function openConsultModal(expertName = null) {
    if (expertName && consultSpecialistSelect) {
      for (let i = 0; i < consultSpecialistSelect.options.length; i++) {
        if (consultSpecialistSelect.options[i].text.includes(expertName)) {
          consultSpecialistSelect.selectedIndex = i;
          break;
        }
      }
    }
    consultForm.style.display = 'block';
    consultSuccessBox.style.display = 'none';
    consultModal?.classList.add('open');
    consultBackdrop?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeConsultModal() {
    consultModal?.classList.remove('open');
    consultBackdrop?.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.book-consult-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      openConsultModal(btn.dataset.expert);
    });
  });

  consultCloseBtn?.addEventListener('click', closeConsultModal);
  consultBackdrop?.addEventListener('click', closeConsultModal);
  closeConsultSuccessBtn?.addEventListener('click', closeConsultModal);

  // Set default date to tomorrow
  const dateInput = document.getElementById('consultDate');
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.value = tomorrow.toISOString().split('T')[0];
  }

  consultForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const specialist = document.getElementById('consultSpecialist').value;
    const name = document.getElementById('consultName').value;
    const email = document.getElementById('consultEmail').value;
    const concern = document.getElementById('consultHairConcern').value;
    const date = document.getElementById('consultDate').value;
    const time = document.getElementById('consultTime').value;

    if (consultSummaryCard) {
      consultSummaryCard.innerHTML = `
        <strong>Client:</strong> ${name} (${email})<br>
        <strong>Specialist:</strong> ${specialist}<br>
        <strong>Primary Focus:</strong> ${concern}<br>
        <strong>Scheduled Time:</strong> ${date} at ${time}<br>
        <span style="color: var(--color-accent); font-weight: 600;">🌿 Complimentary 15-Minute Video Link emailed to ${email}</span>
      `;
    }

    consultForm.style.display = 'none';
    consultSuccessBox.style.display = 'block';
    showToast('🎉 Consultation booked! Video invitation sent.');
  });

});
