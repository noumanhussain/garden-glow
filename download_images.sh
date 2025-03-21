#!/bin/bash

# Create the directory if it doesn't exist
mkdir -p public/images/slider

# Download images using curl
curl -o public/images/slider/slide1.jpg "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1920&q=80" # Sunflower field
curl -o public/images/slider/slide2.jpg "https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=1920&q=80" # Garden plants
curl -o public/images/slider/slide3.jpg "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=1920&q=80" # Spring bulbs
curl -o public/images/slider/slide4.jpg "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=1920&q=80" # Vegetable seeds
curl -o public/images/slider/slide5.jpg "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1920&q=80" # Plant food/fertilizer