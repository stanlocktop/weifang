const tractors = [

  // ТРАКТОР 1
  { id:1, img:"img/TC904.jpg",
    en:{ model:"TC 904",
         name:"TECTOR TC 904",
         desc:"Reliable 4-cylinder workhorse with 66.2 kW output. Designed for medium-scale farming with excellent ground clearance and a versatile multi-range gearbox.",
         specs:{
           "Engine":{
             "Power":        "66.2 kW (90 HP)",
             "Cylinders":    "4",
             "Displacement": "4 200 cc",
             "Fuel type":    "Diesel"
           },
           "Transmission":{
             "Gearbox": "(4+4)×3",
             "Drive":   "4WD"
           },
           "Dimensions":{
             "Weight":           "3 900 kg",
             "Wheelbase":        "2 100 mm",
             "Ground clearance": "490 mm"
           },
           "Hydraulics":{
             "Lift capacity": "22 kN",
             "PTO speed":     "540 / 1000 rpm"
           }
         }
    },
    zh:{ model:"TC 904",
         name:"TECTOR TC 904",
         desc:"可靠的四缸拖拉机，输出功率66.2千瓦，适合中型农业作业，离地间隙大，多档变速箱灵活实用。",
         specs:{
           "发动机":{ "功率":"66.2 kW (90 HP)", "气缸数":"4", "排量":"4 200 cc", "燃料类型":"柴油" },
           "变速箱":{ "档位":"(4+4)×3", "驱动方式":"四轮驱动" },
           "尺寸":{ "重量":"3 900 千克", "轴距":"2 100 毫米", "离地间隙":"490 毫米" },
           "液压系统":{ "提升能力":"22 kN", "动力输出转速":"540 / 1000 转/分" }
         }
    }
  },

  // ТРАКТОР 2
  { id:2, img:"img/TC1104.jpg",
    en:{ model:"TC 1104",
         name:"TECTOR TC 1104",
         desc:"High-capacity 4-cylinder tractor with 80.9 kW. A 24-speed gearbox and heavy-duty hydraulics make it ideal for large-scale field operations.",
         specs:{
           "Engine":{
             "Power":        "80.9 kW (110 HP)",
             "Cylinders":    "4",
             "Displacement": "5 030 cc",
             "Fuel type":    "Diesel"
           },
           "Transmission":{
             "Gearbox": "(12+4)×2",
             "Drive":   "4WD"
           },
           "Dimensions":{
             "Weight":           "5 030 kg",
             "Wheelbase":        "2 300 mm",
             "Ground clearance": "490 mm"
           },
           "Hydraulics":{
             "Lift capacity": "28 kN",
             "PTO speed":     "540 / 1000 rpm"
           }
         }
    },
    zh:{ model:"TC 1104",
         name:"TECTOR TC 1104",
         desc:"大功率四缸拖拉机，输出功率80.9千瓦，24档变速箱配合重型液压系统，适合大规模田间作业。",
         specs:{
           "发动机":{ "功率":"80.9 kW (110 HP)", "气缸数":"4", "排量":"5 030 cc", "燃料类型":"柴油" },
           "变速箱":{ "档位":"(12+4)×2", "驱动方式":"四轮驱动" },
           "尺寸":{ "重量":"5 030 千克", "轴距":"2 300 毫米", "离地间隙":"490 毫米" },
           "液压系统":{ "提升能力":"28 kN", "动力输出转速":"540 / 1000 转/分" }
         }
    }
  },

  // ТРАКТОР 3
  { id:3, img:"img/TC244Е.jpg",
    en:{ model:"TC 244E",
         name:"TECTOR TC 244E",
         desc:"Compact 3-cylinder tractor with 17.6 kW. Perfect for small farms, orchards and tight spaces where maneuverability is key.",
         specs:{
           "Engine":{
             "Power":        "17.6 kW (24 HP)",
             "Cylinders":    "3",
             "Displacement": "1 532 cc",
             "Fuel type":    "Diesel"
           },
           "Transmission":{
             "Gearbox": "(4+1)×2",
             "Drive":   "4WD"
           },
           "Dimensions":{
             "Weight":           "1 250 kg",
             "Wheelbase":        "2 300 mm",
             "Ground clearance": "380 mm"
           },
           "Hydraulics":{
             "Lift capacity": "12 kN",
             "PTO speed":     "540 / 1000 rpm"
           }
         }
    },
    zh:{ model:"TC 244E",
         name:"TECTOR TC 244E",
         desc:"紧凑型三缸拖拉机，功率17.6千瓦，适合小型农场、果园及空间受限的作业环境，机动性强。",
         specs:{
           "发动机":{ "功率":"17.6 kW (24 HP)", "气缸数":"3", "排量":"1 532 cc", "燃料类型":"柴油" },
           "变速箱":{ "档位":"(4+1)×2", "驱动方式":"四轮驱动" },
           "尺寸":{ "重量":"1 250 千克", "轴距":"2 300 毫米", "离地间隙":"380 毫米" },
           "液压系统":{ "提升能力":"12 kN", "动力输出转速":"540 / 1000 转/分" }
         }
    }
  },

  // ТРАКТОР 4
  { id:4, img:"img/TC244U.jpg",
    en:{ model:"TC 244U",
         name:"TECTOR TC 244U",
         desc:"Versatile 24HP compact tractor built for small farm tasks. Lightweight design with 4WD traction and a reliable 3-cylinder engine.",
         specs:{
           "Engine":{
             "Power":        "17.6 kW (24 HP)",
             "Cylinders":    "3",
             "Displacement": "1 532 cc",
             "Fuel type":    "Diesel"
           },
           "Transmission":{
             "Gearbox": "(4+1)×2",
             "Drive":   "4WD"
           },
           "Dimensions":{
             "Weight":           "1 250 kg",
             "Wheelbase":        "2 300 mm",
             "Ground clearance": "380 mm"
           },
           "Hydraulics":{
             "Lift capacity": "12 kN",
             "PTO speed":     "540 / 1000 rpm"
           }
         }
    },
    zh:{ model:"TC 244U",
         name:"TECTOR TC 244U",
         desc:"多功能24马力紧凑型拖拉机，适合小型农场作业，轻量化设计，四驱牵引力强，三缸发动机可靠耐用。",
         specs:{
           "发动机":{ "功率":"17.6 kW (24 HP)", "气缸数":"3", "排量":"1 532 cc", "燃料类型":"柴油" },
           "变速箱":{ "档位":"(4+1)×2", "驱动方式":"四轮驱动" },
           "尺寸":{ "重量":"1 250 千克", "轴距":"2 300 毫米", "离地间隙":"380 毫米" },
           "液压系统":{ "提升能力":"12 kN", "动力输出转速":"540 / 1000 转/分" }
         }
    }
  },

  // ТРАКТОР 5
  { id:5, img:"img/TC244А.jpg",
    en:{ model:"TC 244A",
         name:"TECTOR TC 244A",
         desc:"Entry-level 24HP tractor for everyday farm work. Simple to operate, easy to maintain, and built to last in demanding field conditions.",
         specs:{
           "Engine":{
             "Power":        "17.6 kW (24 HP)",
             "Cylinders":    "3",
             "Displacement": "1 532 cc",
             "Fuel type":    "Diesel"
           },
           "Transmission":{
             "Gearbox": "(4+1)×2",
             "Drive":   "4WD"
           },
           "Dimensions":{
             "Weight":           "1 250 kg",
             "Wheelbase":        "2 300 mm",
             "Ground clearance": "380 mm"
           },
           "Hydraulics":{
             "Lift capacity": "12 kN",
             "PTO speed":     "540 / 1000 rpm"
           }
         }
    },
    zh:{ model:"TC 244A",
         name:"TECTOR TC 244A",
         desc:"入门级24马力拖拉机，适合日常农业作业，操作简便，维护方便，在恶劣田间条件下经久耐用。",
         specs:{
           "发动机":{ "功率":"17.6 kW (24 HP)", "气缸数":"3", "排量":"1 532 cc", "燃料类型":"柴油" },
           "变速箱":{ "档位":"(4+1)×2", "驱动方式":"四轮驱动" },
           "尺寸":{ "重量":"1 250 千克", "轴距":"2 300 毫米", "离地间隙":"380 毫米" },
           "液压系统":{ "提升能力":"12 kN", "动力输出转速":"540 / 1000 转/分" }
         }
    }
  },

  // ТРАКТОР 6
  { id:6, img:"img/TC244В.jpg",
    en:{ model:"TC 244B",
         name:"TECTOR TC 244B",
         desc:"Compact and agile 24HP tractor suited for vegetable farms and greenhouse operations. Lightweight with full 4WD capability.",
         specs:{
           "Engine":{
             "Power":        "17.6 kW (24 HP)",
             "Cylinders":    "3",
             "Displacement": "1 532 cc",
             "Fuel type":    "Diesel"
           },
           "Transmission":{
             "Gearbox": "(4+1)×2",
             "Drive":   "4WD"
           },
           "Dimensions":{
             "Weight":           "1 250 kg",
             "Wheelbase":        "2 300 mm",
             "Ground clearance": "380 mm"
           },
           "Hydraulics":{
             "Lift capacity": "12 kN",
             "PTO speed":     "540 / 1000 rpm"
           }
         }
    },
    zh:{ model:"TC 244B",
         name:"TECTOR TC 244B",
         desc:"紧凑灵活的24马力拖拉机，适合蔬菜种植及温室作业，车身轻巧，具备完整四驱功能。",
         specs:{
           "发动机":{ "功率":"17.6 kW (24 HP)", "气缸数":"3", "排量":"1 532 cc", "燃料类型":"柴油" },
           "变速箱":{ "档位":"(4+1)×2", "驱动方式":"四轮驱动" },
           "尺寸":{ "重量":"1 250 千克", "轴距":"2 300 毫米", "离地间隙":"380 毫米" },
           "液压系统":{ "提升能力":"12 kN", "动力输出转速":"540 / 1000 转/分" }
         }
    }
  },

  // ТРАКТОР 7
  { id:7, img:"img/TC244ВС.jpg",
    en:{ model:"TC 244BC",
         name:"TECTOR TC 244BC",
         desc:"Enhanced compact tractor with cab option. Combines the proven 24HP drivetrain with improved operator comfort for all-day use.",
         specs:{
           "Engine":{
             "Power":        "17.6 kW (24 HP)",
             "Cylinders":    "3",
             "Displacement": "1 532 cc",
             "Fuel type":    "Diesel"
           },
           "Transmission":{
             "Gearbox": "(4+1)×2",
             "Drive":   "4WD"
           },
           "Dimensions":{
             "Weight":           "1 250 kg",
             "Wheelbase":        "2 300 mm",
             "Ground clearance": "380 mm"
           },
           "Hydraulics":{
             "Lift capacity": "12 kN",
             "PTO speed":     "540 / 1000 rpm"
           }
         }
    },
    zh:{ model:"TC 244BC",
         name:"TECTOR TC 244BC",
         desc:"配备驾驶室选项的紧凑型拖拉机，采用成熟的24马力传动系统，提升操作舒适性，适合全天连续作业。",
         specs:{
           "发动机":{ "功率":"17.6 kW (24 HP)", "气缸数":"3", "排量":"1 532 cc", "燃料类型":"柴油" },
           "变速箱":{ "档位":"(4+1)×2", "驱动方式":"四轮驱动" },
           "尺寸":{ "重量":"1 250 千克", "轴距":"2 300 毫米", "离地间隙":"380 毫米" },
           "液压系统":{ "提升能力":"12 kN", "动力输出转速":"540 / 1000 转/分" }
         }
    }
  },

  // ТРАКТОР 8
  { id:8, img:"img/TC1304.jpg",
    en:{ model:"TC 1304",
         name:"TECTOR TC 1304",
         desc:"Flagship 6-cylinder tractor delivering 95.6 kW. Built for the most demanding agricultural tasks with maximum lift capacity and high ground clearance.",
         specs:{
           "Engine":{
             "Power":        "95.6 kW (130 HP)",
             "Cylinders":    "6",
             "Displacement": "7 700 cc",
             "Fuel type":    "Diesel"
           },
           "Transmission":{
             "Gearbox": "(4+1)×3×2",
             "Drive":   "4WD"
           },
           "Dimensions":{
             "Weight":           "5 200 kg",
             "Wheelbase":        "2 300 mm",
             "Ground clearance": "490 mm"
           },
           "Hydraulics":{
             "Lift capacity": "30 kN",
             "PTO speed":     "540 / 1000 rpm"
           }
         }
    },
    zh:{ model:"TC 1304",
         name:"TECTOR TC 1304",
         desc:"旗舰六缸拖拉机，输出功率95.6千瓦，专为最高强度农业作业设计，提升能力强，离地间隙大，性能卓越。",
         specs:{
           "发动机":{ "功率":"95.6 kW (130 HP)", "气缸数":"6", "排量":"7 700 cc", "燃料类型":"柴油" },
           "变速箱":{ "档位":"(4+1)×3×2", "驱动方式":"四轮驱动" },
           "尺寸":{ "重量":"5 200 千克", "轴距":"2 300 毫米", "离地间隙":"490 毫米" },
           "液压系统":{ "提升能力":"30 kN", "动力输出转速":"540 / 1000 转/分" }
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
        <img class="tc-img" src="${t.img}" alt="${d.name} — ${d.model} agricultural tractor"
             loading="lazy" width="640" height="400"
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