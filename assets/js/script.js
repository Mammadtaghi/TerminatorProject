AOS.init();
const Illustration = [
    "https://dt-aimax.myshopify.com/cdn/shop/files/tab-masonry3.jpg?v=1684147835&width=1500",
    "https://dt-aimax.myshopify.com/cdn/shop/files/tab-masonry2.jpg?v=1684148010&width=1500",
    "https://dt-aimax.myshopify.com/cdn/shop/files/tab-masonry4.jpg?v=1684148011&width=1500",
    "https://dt-aimax.myshopify.com/cdn/shop/files/tab-masonry1.jpg?v=1684148010&width=1500",
    "https://dt-aimax.myshopify.com/cdn/shop/files/tab-masonry5.jpg?v=1684148010&width=1500"
  ];
  
  const Animals = [
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-animal-1.jpg?v=1685531183&width=1500",
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-animal-5.jpg?v=1685531253&width=1500",
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-animal-2.jpg?v=1685531204&width=1500",
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-animal-3.jpg?v=1685531220&width=1500",
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-animal-4.jpg?v=1685531237&width=1500"
  ]
  
  const Architecture = [
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-architechture-1.jpg?v=1685531594&width=1500",
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-architechture-5.jpg?v=1685531659&width=1500",
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-architechture-2.jpg?v=1685531611&width=1500",
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-architechture-3.jpg?v=1685531625&width=1500",
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-architechture-4.jpg?v=1685531644&width=1500"
  ]
  
  const Robotics = [
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-game-1.jpg?v=1685531750&width=1500",
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-game-5.jpg?v=1685531813&width=1500",
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-game-2.jpg?v=1685531766&width=1500",
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-game-3.jpg?v=1685531782&width=1500",
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-game-4.jpg?v=1685531796&width=1500"
  ]
  
  const Animations = [
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-robotics-1.jpg?v=1685531836&width=1500",
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-robotics-5.jpg?v=1685531897&width=1500",
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-robotics-2.jpg?v=1685531852&width=1500",
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-robotics-3.jpg?v=1685531867&width=1500",
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-robotics-4.jpg?v=1685531882&width=1500"
  ]
  
  const img1 = document.querySelector(".img1")
  const img2 = document.querySelector(".img2")
  const img3 = document.querySelector(".img3")
  const img4 = document.querySelector(".img4")
  const img5 = document.querySelector(".img5")
  function addIllus() {
     img1.src = Illustration[0]
     img2.src = Illustration[1]
     img3.src = Illustration[2]
     img4.src = Illustration[3]
     img5.src = Illustration[4]  
  }
  function addAnimal() {
      img1.src = Animals[0]
      img2.src = Animals[1]
      img3.src = Animals[2]
      img4.src = Animals[3]
      img5.src = Animals[4]  
   }
   function addArch() {
      img1.src = Architecture[0]
      img2.src = Architecture[1]
      img3.src = Architecture[2]
      img4.src = Architecture[3]
      img5.src = Architecture[4]  
   }
   function addRobots() {
      img1.src = Robotics[0]
      img2.src = Robotics[1]
      img3.src = Robotics[2]
      img4.src = Robotics[3]
      img5.src = Robotics[4]  
   }
   function addAnimation() {
      img1.src = Animations[0]
      img2.src = Animations[1]
      img3.src = Animations[2]
      img4.src = Animations[3]
      img5.src = Animations[4]  
   }
   