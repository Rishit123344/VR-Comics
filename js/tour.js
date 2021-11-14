AFRAME.registerComponent("tour", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards()
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "Batman",
          title: "Batman Who Laughs",
          url: "./assets/po-1.jpg",
        },
        {
          id: "Shang-Chi",
          title: "Shang-Chi",
          url: "./assets/po-2.jpg",
        },
  
        {
          id: "Superman",
          title: "SuperMan Action",
          url: "./assets/po-3.jpg",
        },
        {
          id: "Spider-Man",
          title: "The-Amazing Spider-Man",
          url: "./assets/po-4.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl = this.createBorder(position,item.id)
        // Thumbnail Element
       const thumbnail = this.createThumbnail(item)
       borderEl.appendChild(thumbnail)
        // Title Text Element
        const titleEl = this.createTitle(position,item)
        borderEl.appendChild(titleEl)
        this.placesContainer.appendChild(borderEl);
      }
    },
    createBorder:function(position,id){
      const entityEl = document.createElement('a-entity')
      entityEl.setAttribute('id',id)
      entityEl.setAttribute('visible',true)
      entityEl.setAttribute('geometry',{primitive:'ring',radiusInner:9,radiusOuter:10})
      entityEl.setAttribute('position',position)
      entityEl.setAttribute('material',{color:'#0077CC',opacity:1})
      return entityEl
    },
    createThumbnail:function(item){
      const entityEl = document.createElement('a-entity')
      entityEl.setAttribute('visible',true)
      entityEl.setAttribute('geometry',{primitive:'circle',radius:9})
      entityEl.setAttribute('material',{src:item.url})
      return entityEl
    },
    createTitle:function(position,item){
      const entityEl = document.createElement('a-entity')
      entityEl.setAttribute('text',{font: 'exo2bold', align: 'center', width: 70, color: '#E65100', value: item.title})
      const Elposition = position
      Elposition.y = -20
      entityEl.setAttribute('position',Elposition)  
      entityEl.setAttribute('visible',true)
      return entityEl
    }
  });
  