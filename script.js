const tractors = [

  // ТРАКТОР 1 — заполнить: model, name (EN+ZH), desc (EN+ZH), все specs
  { id:1, img:"img/1.jpg",
    en:{ model:"— Model —",      // название модели (напр. "Model TX-504")
         name:"— Tractor Name —", // полное название (напр. "TECTOR TX-504")
         desc:"— Description —",  // краткое описание на английском
         specs:{
           "Engine":{
             "Power":        "—",   //напр. "50 HP / 37 kW"
             "Cylinders":    "—",   // напр. "4"
             "Displacement": "—",   // напр. "2.5 L"
             "Fuel type":    "—"    // напр. "Diesel"
           },
           "Transmission":{
             "Gearbox": "—",        // напр. "8F + 8R"
             "Drive":   "—"         // напр. "4WD"
           },
           "Dimensions":{
             "Weight":           "—", // напр. "2 100 kg"
             "Wheelbase":        "—", // напр. "1 950 mm"
             "Ground clearance": "—"  // напр. "310 mm"
           },
           "Hydraulics":{
             "Lift capacity": "—",    // напр. "1 600 kg"
             "PTO speed":     "—"     // напр. "540 / 1000 rpm"
           }
         }
    },
    zh:{ model:"— 型号 —",       // название модели на китайском
         name:"— 拖拉机名称 —",   // полное название на китайском
         desc:"— 描述 —",         // описание на китайском
         specs:{
           "发动机":{ "功率":"—", "气缸数":"—", "排量":"—", "燃料类型":"—" },
           "变速箱":{ "档位":"—", "驱动方式":"—" },
           "尺寸":{ "重量":"—", "轴距":"—", "离地间隙":"—" },
           "液压系统":{ "提升能力":"—", "动力输出转速":"—" }
         }
    }
  },

  // ТРАКТОР 2 — заполнить: model, name (EN+ZH), desc (EN+ZH), все specs
  { id:2, img:"img/2.jpg",
    en:{ model:"— Model —",
         name:"— Tractor Name —",
         desc:"— Description —",
         specs:{
           "Engine":{ "Power":"—", "Cylinders":"—", "Displacement":"—", "Fuel type":"—" },
           "Transmission":{ "Gearbox":"—", "Drive":"—" },
           "Dimensions":{ "Weight":"—", "Wheelbase":"—", "Ground clearance":"—" },
           "Hydraulics":{ "Lift capacity":"—", "PTO speed":"—" }
         }
    },
    zh:{ model:"— 型号 —", name:"— 拖拉机名称 —", desc:"— 描述 —",
         specs:{
           "发动机":{ "功率":"—", "气缸数":"—", "排量":"—", "燃料类型":"—" },
           "变速箱":{ "档位":"—", "驱动方式":"—" },
           "尺寸":{ "重量":"—", "轴距":"—", "离地间隙":"—" },
           "液压系统":{ "提升能力":"—", "动力输出转速":"—" }
         }
    }
  },

  // ТРАКТОР 3 — заполнить: model, name (EN+ZH), desc (EN+ZH), все specs
  { id:3, img:"img/3.jpg",
    en:{ model:"— Model —",
         name:"— Tractor Name —",
         desc:"— Description —",
         specs:{
           "Engine":{ "Power":"—", "Cylinders":"—", "Displacement":"—", "Fuel type":"—" },
           "Transmission":{ "Gearbox":"—", "Drive":"—" },
           "Dimensions":{ "Weight":"—", "Wheelbase":"—", "Ground clearance":"—" },
           "Hydraulics":{ "Lift capacity":"—", "PTO speed":"—" }
         }
    },
    zh:{ model:"— 型号 —", name:"— 拖拉机名称 —", desc:"— 描述 —",
         specs:{
           "发动机":{ "功率":"—", "气缸数":"—", "排量":"—", "燃料类型":"—" },
           "变速箱":{ "档位":"—", "驱动方式":"—" },
           "尺寸":{ "重量":"—", "轴距":"—", "离地间隙":"—" },
           "液压系统":{ "提升能力":"—", "动力输出转速":"—" }
         }
    }
  },

  // ТРАКТОР 4 — заполнить: model, name (EN+ZH), desc (EN+ZH), все specs
  { id:4, img:"img/4.jpg",
    en:{ model:"— Model —",
         name:"— Tractor Name —",
         desc:"— Description —",
         specs:{
           "Engine":{ "Power":"—", "Cylinders":"—", "Displacement":"—", "Fuel type":"—" },
           "Transmission":{ "Gearbox":"—", "Drive":"—" },
           "Dimensions":{ "Weight":"—", "Wheelbase":"—", "Ground clearance":"—" },
           "Hydraulics":{ "Lift capacity":"—", "PTO speed":"—" }
         }
    },
    zh:{ model:"— 型号 —", name:"— 拖拉机名称 —", desc:"— 描述 —",
         specs:{
           "发动机":{ "功率":"—", "气缸数":"—", "排量":"—", "燃料类型":"—" },
           "变速箱":{ "档位":"—", "驱动方式":"—" },
           "尺寸":{ "重量":"—", "轴距":"—", "离地间隙":"—" },
           "液压系统":{ "提升能力":"—", "动力输出转速":"—" }
         }
    }
  },

  // ТРАКТОР 5 — заполнить: model, name (EN+ZH), desc (EN+ZH), все specs
  { id:5, img:"img/5.jpg",
    en:{ model:"— Model —",
         name:"— Tractor Name —",
         desc:"— Description —",
         specs:{
           "Engine":{ "Power":"—", "Cylinders":"—", "Displacement":"—", "Fuel type":"—" },
           "Transmission":{ "Gearbox":"—", "Drive":"—" },
           "Dimensions":{ "Weight":"—", "Wheelbase":"—", "Ground clearance":"—" },
           "Hydraulics":{ "Lift capacity":"—", "PTO speed":"—" }
         }
    },
    zh:{ model:"— 型号 —", name:"— 拖拉机名称 —", desc:"— 描述 —",
         specs:{
           "发动机":{ "功率":"—", "气缸数":"—", "排量":"—", "燃料类型":"—" },
           "变速箱":{ "档位":"—", "驱动方式":"—" },
           "尺寸":{ "重量":"—", "轴距":"—", "离地间隙":"—" },
           "液压系统":{ "提升能力":"—", "动力输出转速":"—" }
         }
    }
  },

  // ТРАКТОР 6 — заполнить: model, name (EN+ZH), desc (EN+ZH), все specs
  { id:6, img:"img/6.jpg",
    en:{ model:"— Model —",
         name:"— Tractor Name —",
         desc:"— Description —",
         specs:{
           "Engine":{ "Power":"—", "Cylinders":"—", "Displacement":"—", "Fuel type":"—" },
           "Transmission":{ "Gearbox":"—", "Drive":"—" },
           "Dimensions":{ "Weight":"—", "Wheelbase":"—", "Ground clearance":"—" },
           "Hydraulics":{ "Lift capacity":"—", "PTO speed":"—" }
         }
    },
    zh:{ model:"— 型号 —", name:"— 拖拉机名称 —", desc:"— 描述 —",
         specs:{
           "发动机":{ "功率":"—", "气缸数":"—", "排量":"—", "燃料类型":"—" },
           "变速箱":{ "档位":"—", "驱动方式":"—" },
           "尺寸":{ "重量":"—", "轴距":"—", "离地间隙":"—" },
           "液压系统":{ "提升能力":"—", "动力输出转速":"—" }
         }
    }
  },

  // ТРАКТОР 7 — заполнить: model, name (EN+ZH), desc (EN+ZH), все specs
  { id:7, img:"img/7.jpg",
    en:{ model:"— Model —",
         name:"— Tractor Name —",
         desc:"— Description —",
         specs:{
           "Engine":{ "Power":"—", "Cylinders":"—", "Displacement":"—", "Fuel type":"—" },
           "Transmission":{ "Gearbox":"—", "Drive":"—" },
           "Dimensions":{ "Weight":"—", "Wheelbase":"—", "Ground clearance":"—" },
           "Hydraulics":{ "Lift capacity":"—", "PTO speed":"—" }
         }
    },
    zh:{ model:"— 型号 —", name:"— 拖拉机名称 —", desc:"— 描述 —",
         specs:{
           "发动机":{ "功率":"—", "气缸数":"—", "排量":"—", "燃料类型":"—" },
           "变速箱":{ "档位":"—", "驱动方式":"—" },
           "尺寸":{ "重量":"—", "轴距":"—", "离地间隙":"—" },
           "液压系统":{ "提升能力":"—", "动力输出转速":"—" }
         }
    }
  }

];

const T = {
  en:{
    nav_about:"About", nav_catalog:"Catalog", nav_contacts:"Contacts",
    btn_contact:"Contact Us",
    hero_sub:"Modern Agriculture", hero_title_1:"Power for fields.",
    hero_title_2:"Precision for business.",
    hero_desc:"Professional tractors from WEIFANG TECTOR AGRICULTURAL EQUIPMENT CO., LTD. Reliable quality for modern farming.",
    btn_models:"View Models", btn_price:"Get Price List",
    stat_years:"Years Experience", stat_quality:"Quality Control",
    stat_models:"Models", stat_support:"Support",
    catalog_sub:"Our Equipment", catalog_title_acc:"Catalog",
    btn_specs:"View Specs", btn_inquire:"Request a Quote",
    cta_title:"Ready to upgrade your farm?",
    cta_desc:"Leave a request and get a consultation from our engineers.",
    btn_request:"Request Callback",
    footer_name:"WEIFANG TECTOR AGRICULTURAL EQUIPMENT CO., LTD.",
    footer_contact_h:"Contacts", footer_city:"Weifang, China",
    footer_addr_h:"Address",
    footer_addr:"120 METERS SOUTHWEST OF XINZHUANG VILLAGE COMMITTEE, WEICHENG, WEIFANG"
  },
  zh:{
    nav_about:"关于我们", nav_catalog:"产品目录", nav_contacts:"联系方式",
    btn_contact:"联系我们",
    hero_sub:"现代农业装备", hero_title_1:"耕耘田野的力量",
    hero_title_2:"助力商业精准化",
    hero_desc:"潍坊泰克特农业装备有限公司提供的专业拖拉机。为现代农业提供可靠品质。",
    btn_models:"查看型号", btn_price:"获取价格表",
    stat_years:"多年经验", stat_quality:"质量控制",
    stat_models:"多种型号", stat_support:"售后支持",
    catalog_sub:"我们的产品", catalog_title_acc:"产品目录",
    btn_specs:"查看规格", btn_inquire:"申请报价",
    cta_title:"准备好升级您的农场了吗？",
    cta_desc:"留下您的联系方式，获取我们工程师的咨询。",
    btn_request:"申请回电",
    footer_name:"潍坊泰克特农业装备有限公司",
    footer_contact_h:"联系方式", footer_city:"中国 潍坊",
    footer_addr_h:"地址",
    footer_addr:"潍坊市潍城区新庄村委会西南120米"
  }
};

let lang = 'en';

function renderCatalog() {
  const grid = document.getElementById('catalog-grid');
  grid.innerHTML = '';
  tractors.forEach(t => {
    const d = t[lang];
    const col = document.createElement('div');
    col.className = 'col-12 col-sm-6 col-lg-4 col-xxl-3';
    col.innerHTML = `
      <div class="tractor-card" onclick="openModal(${t.id})">
        <img class="tc-img" src="${t.img}" alt="${d.name}"
             onerror="this.style.background='#1a1a1a'">
        <div class="tc-body">
          <div class="tc-model">${d.model}</div>
          <div class="tc-name">${d.name}</div>
          <div class="tc-desc">${d.desc}</div>
          <button class="btn-specs"
                  onclick="event.stopPropagation();openModal(${t.id})">
            <i class="bi bi-arrow-right-circle"></i>
            ${T[lang].btn_specs}
          </button>
        </div>
      </div>`;
    grid.appendChild(col);
  });
}

function openModal(id) {
  const t = tractors.find(x => x.id === id);
  const d = t[lang];
  document.getElementById('modal-img').src          = t.img;
  document.getElementById('modal-img').alt          = d.name;
  document.getElementById('modal-tag').textContent  = d.model;
  document.getElementById('modal-title-el').textContent = d.name;
  document.getElementById('modal-desc').textContent = d.desc;

  let html = '';
  for (const [sec, rows] of Object.entries(d.specs)) {
    html += `<div class="spec-section-title">${sec}</div>`;
    for (const [k, v] of Object.entries(rows)) {
      html += `<div class="spec-row">
                 <span class="spec-label">${k}</span>
                 <span class="spec-value">${v}</span>
               </div>`;
    }
  }
  document.getElementById('modal-specs').innerHTML = html;

  const btn = document.querySelector('#modal-overlay a[data-key="btn_inquire"]');
  if (btn) btn.textContent = T[lang].btn_inquire;

  document.getElementById('modal-overlay').classList.add('active');
  document.querySelector('.modal-box').scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
  document.body.style.overflow = '';
}
function closeModalOutside(e) {
  if (e.target.id === 'modal-overlay') closeModal();
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

function toggleMenu() {
  const m = document.getElementById('mobile-menu');
  const h = document.getElementById('hamburger');
  m.classList.toggle('open');
  h.classList.toggle('open');
}
function closeMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}

function setLang(l) {
  lang = l;
  localStorage.setItem('selectedLang', l);
  document.querySelectorAll('[data-key]').forEach(el => {
    const k = el.getAttribute('data-key');
    if (T[l][k]) el.textContent = T[l][k];
  });
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`btn-${l}`).classList.add('active');
  document.documentElement.lang = l;
  renderCatalog();
}

setLang(localStorage.getItem('selectedLang') || 'en');
