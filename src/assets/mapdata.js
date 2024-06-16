var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "no",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: "10",
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    BG01: {
      name: "Blagoevgrad",
      color: "#fff"
    },
    BG02: {
      name: "Burgas"
    },
    BG03: {
      name: "Varna"
    },
    BG04: {
      name: "Veliko Tarnovo"
    },
    BG05: {
      name: "Vidin"
    },
    BG06: {
      name: "Vratsa"
    },
    BG07: {
      name: "Gabrovo"
    },
    BG08: {
      name: "Dobrich"
    },
    BG09: {
      name: "Kardzhali"
    },
    BG10: {
      name: "Kyustendil"
    },
    BG11: {
      name: "Lovech"
    },
    BG12: {
      name: "Montana"
    },
    BG13: {
      name: "Pazardzhik"
    },
    BG14: {
      name: "Pernik"
    },
    BG15: {
      name: "Pleven"
    },
    BG16: {
      name: "Plovdiv"
    },
    BG17: {
      name: "Razgrad"
    },
    BG18: {
      name: "Ruse"
    },
    BG19: {
      name: "Silistra"
    },
    BG20: {
      name: "Sliven"
    },
    BG21: {
      name: "Smolyan"
    },
    BG22: {
      name: "Grad Sofiya"
    },
    BG23: {
      name: "Sofia"
    },
    BG24: {
      name: "Stara Zagora"
    },
    BG25: {
      name: "Targovishte"
    },
    BG26: {
      name: "Haskovo"
    },
    BG27: {
      name: "Shumen"
    },
    BG28: {
      name: "Yambol"
    }
  },
  locations: {},
  labels: {
    "0": {
      name: "Blagoevgrad",
      x: 203.1,
      y: 529.7,
      parent_id: "BG01"
    },
    "1": {
      name: "Burgas",
      x: 745.8,
      y: 341.9,
      parent_id: "BG02"
    },
    "2": {
      name: "Varna",
      x: 803.4,
      y: 245.1,
      parent_id: "BG03"
    },
    "3": {
      name: "Veliko Tarnovo",
      x: 544.5,
      y: 243.6,
      parent_id: "BG04"
    },
    "4": {
      name: "Vidin",
      x: 98.3,
      y: 134.5,
      parent_id: "BG05"
    },
    "5": {
      name: "Vratsa",
      x: 242.5,
      y: 210.6,
      parent_id: "BG06"
    },
    "6": {
      name: "Gabrovo",
      x: 455.8,
      y: 289.5,
      parent_id: "BG07"
    },
    "7": {
      name: "Dobrich",
      x: 859.7,
      y: 154,
      parent_id: "BG08"
    },
    "8": {
      name: "Kardzhali",
      x: 491.7,
      y: 571.8,
      parent_id: "BG09"
    },
    "9": {
      name: "Kyustendil",
      x: 101.9,
      y: 429.7,
      parent_id: "BG10"
    },
    "10": {
      name: "Lovech",
      x: 346.8,
      y: 274.7,
      parent_id: "BG11"
    },
    "11": {
      name: "Montana",
      x: 186.7,
      y: 138.4,
      parent_id: "BG12"
    },
    "12": {
      name: "Pazardzhik",
      x: 305.2,
      y: 466.5,
      parent_id: "BG13"
    },
    "13": {
      name: "Pernik",
      x: 131.6,
      y: 362.2,
      parent_id: "BG14"
    },
    "14": {
      name: "Pleven",
      x: 368.1,
      y: 173,
      parent_id: "BG15"
    },
    "15": {
      name: "Plovdiv",
      x: 400.9,
      y: 399.7,
      parent_id: "BG16"
    },
    "16": {
      name: "Razgrad",
      x: 662.6,
      y: 143.2,
      parent_id: "BG17"
    },
    "17": {
      name: "Ruse",
      x: 549.9,
      y: 164.6,
      parent_id: "BG18"
    },
    "18": {
      name: "Silistra",
      x: 733.7,
      y: 88.7,
      parent_id: "BG19"
    },
    "19": {
      name: "Sliven",
      x: 596.3,
      y: 348.1,
      parent_id: "BG20"
    },
    "20": {
      name: "Smolyan",
      x: 389,
      y: 530.2,
      parent_id: "BG21"
    },
    "21": {
      name: "Grad Sofiya",
      x: 189.1,
      y: 342.9,
      parent_id: "BG22"
    },
    "22": {
      name: "Sofia",
      x: 266,
      y: 320,
      parent_id: "BG23"
    },
    "23": {
      name: "Stara Zagora",
      x: 507.7,
      y: 387,
      parent_id: "BG24"
    },
    "24": {
      name: "Targovishte",
      x: 625.9,
      y: 233.5,
      parent_id: "BG25"
    },
    "25": {
      name: "Haskovo",
      x: 556.4,
      y: 499.2,
      parent_id: "BG26"
    },
    "26": {
      name: "Shumen",
      x: 725,
      y: 192.4,
      parent_id: "BG27"
    },
    "27": {
      name: "Yambol",
      x: 665.4,
      y: 422.9,
      parent_id: "BG28"
    },
    BG01: {
      name: "Blagoevgrad",
      parent_id: "BG01",
      x: 203.1,
      y: 529.7
    },
    BG02: {
      name: "Burgas",
      parent_id: "BG02",
      x: 745.8,
      y: 341.9
    },
    BG03: {
      name: "Varna",
      parent_id: "BG03",
      x: 803.4,
      y: 245.1
    },
    BG04: {
      name: "Veliko Tarnovo",
      parent_id: "BG04",
      x: 544.5,
      y: 243.6
    },
    BG05: {
      name: "Vidin",
      parent_id: "BG05",
      x: 98.3,
      y: 134.5
    },
    BG06: {
      name: "Vratsa",
      parent_id: "BG06",
      x: 242.5,
      y: 210.6
    },
    BG07: {
      name: "Gabrovo",
      parent_id: "BG07",
      x: 455.8,
      y: 289.5
    },
    BG08: {
      name: "Dobrich",
      parent_id: "BG08",
      x: 859.7,
      y: 154
    },
    BG09: {
      name: "Kardzhali",
      parent_id: "BG09",
      x: 491.7,
      y: 571.8
    },
    BG10: {
      name: "Kyustendil",
      parent_id: "BG10",
      x: 101.9,
      y: 429.7
    },
    BG11: {
      name: "Lovech",
      parent_id: "BG11",
      x: 346.8,
      y: 274.7
    },
    BG12: {
      name: "Montana",
      parent_id: "BG12",
      x: 186.7,
      y: 138.4
    },
    BG13: {
      name: "Pazardzhik",
      parent_id: "BG13",
      x: 305.2,
      y: 466.5
    },
    BG14: {
      name: "Pernik",
      parent_id: "BG14",
      x: 131.6,
      y: 362.2
    },
    BG15: {
      name: "Pleven",
      parent_id: "BG15",
      x: 368.1,
      y: 173
    },
    BG16: {
      name: "Plovdiv",
      parent_id: "BG16",
      x: 400.9,
      y: 399.7
    },
    BG17: {
      name: "Razgrad",
      parent_id: "BG17",
      x: 662.6,
      y: 143.2
    },
    BG18: {
      name: "Ruse",
      parent_id: "BG18",
      x: 549.9,
      y: 164.6
    },
    BG19: {
      name: "Silistra",
      parent_id: "BG19",
      x: 733.7,
      y: 88.7
    },
    BG20: {
      name: "Sliven",
      parent_id: "BG20",
      x: 596.3,
      y: 348.1
    },
    BG21: {
      name: "Smolyan",
      parent_id: "BG21",
      x: 389,
      y: 530.2
    },
    BG22: {
      name: "Grad Sofiya",
      parent_id: "BG22",
      x: 189.1,
      y: 342.9
    },
    BG23: {
      name: "Sofia",
      parent_id: "BG23",
      x: 266,
      y: 320
    },
    BG24: {
      name: "Stara Zagora",
      parent_id: "BG24",
      x: 507.7,
      y: 387
    },
    BG25: {
      name: "Targovishte",
      parent_id: "BG25",
      x: 625.9,
      y: 233.5
    },
    BG26: {
      name: "Haskovo",
      parent_id: "BG26",
      x: 556.4,
      y: 499.2
    },
    BG27: {
      name: "Shumen",
      parent_id: "BG27",
      x: 725,
      y: 192.4
    },
    BG28: {
      name: "Yambol",
      parent_id: "BG28",
      x: 665.4,
      y: 422.9
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};