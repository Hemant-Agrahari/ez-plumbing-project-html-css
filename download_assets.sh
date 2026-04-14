BASE_URL="https://www.ezheatandair.com"
IMAGES_DIR="assets/images"
mkdir -p "$IMAGES_DIR"

FILES=(
    "/images/ez-brand-logo.svg"
    "/images/heat-air-banner-img-2.png"
    "/images/expert-repairman.png"
    "/images/trusted-name.png"
    "/images/additional-services.png"
    "/images/emergency-service.png"
    "/images/247-service.png"
    "/images/free-estimate.png"
    "/images/free-service-call.png"
    "/images/discount-available.png"
    "/images/finance-service.png"
    "/images/star.jpg"
    "/images/next-arrow.png"
    "/images/location-map.png"
    "/images/facebook.png"
    "/images/twitter.png"
    "/images/linkedin.svg"
    "/images/instagram.png"
    "/images/mca-protected.png"
    "/images/rating-footer.png"
    "/images/aaa.png"
    "/images/allstate.png"
    "/images/state-farm.png"
    "/images/geico.png"
    "/images/farmers.png"
    "/images/travelers.png"
    "/images/nationwide.png"
    "/images/liberty-mutual.png"
)

for file in "${FILES[@]}"; do
    filename=$(basename "$file")
    echo "Downloading $filename..."
    curl -s -L "$BASE_URL$file" -o "$IMAGES_DIR/$filename"
done

# Blog images from a different domain
curl -s -L "http://ezapi.ezheatandair.com/uploads/media/Stay%20Warm%20This%20Winter%20Top%20Heating%20Repair%20Services%20in%20San%20Diego%20CA.jpg" -o "$IMAGES_DIR/blog-heating-repair.jpg"
curl -s -L "http://ezapi.ezheatandair.com/uploads/media/5%20Reasons%20Your%20Water%20Heater%20Isn%C3%A2%C2%80%C2%99t%20Working%20and%20How%20San%20Diego%20Experts%20Can%20Help.jpg" -o "$IMAGES_DIR/blog-water-heater.jpg"

echo "Download complete."
