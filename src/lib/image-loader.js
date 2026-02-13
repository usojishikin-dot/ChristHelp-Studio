/**
 * Image loader utility for future Cloudinary migration
 * Currently loads from local /public/images folder
 */

// Configuration - change this when migrating to Cloudinary
const IMAGE_CONFIG = {
    useCloudinary: false,
    cloudinaryBaseUrl: '', // Fill in when using Cloudinary
    localBasePath: '/images',
};

/**
 * Get the full path for an image
 * @param {string} folder - Subfolder name (e.g., 'portfolio', 'hero')
 * @param {string} filename - Image filename
 * @returns {string} Full image URL
 */
export const getImagePath = (folder, filename) => {
    if (IMAGE_CONFIG.useCloudinary) {
        return `${IMAGE_CONFIG.cloudinaryBaseUrl}/${folder}/${filename}`;
    }
    return `${IMAGE_CONFIG.localBasePath}/${folder}/${filename}`;
};

/**
 * Get hero image path
 * @param {string} filename - Image filename
 * @returns {string} Full image URL
 */
export const getHeroImage = (filename) => {
    return getImagePath('hero', filename);
};

/**
 * Get portfolio image path
 * @param {string} filename - Image filename
 * @returns {string} Full image URL
 */
export const getPortfolioImage = (filename) => {
    return getImagePath('portfolio', filename);
};

/**
 * Portfolio images configuration
 * Update this list when adding/removing portfolio images
 */
export const portfolioImages = [
    { id: 1, src: '/images/portfolio/photo1.jpg', webp: '/images/portfolio/photo1.webp', alt: 'Studio Portrait', category: 'portrait' },
    { id: 2, src: '/images/portfolio/photo2.jpg', webp: '/images/portfolio/photo2.webp', alt: 'Photography Session', category: 'portrait' },
    { id: 3, src: '/images/portfolio/photot3.jpg', webp: '/images/portfolio/photot3.webp', alt: 'Professional Shoot', category: 'portrait' },
    { id: 4, src: '/images/portfolio/photo4.jpg', webp: '/images/portfolio/photo4.webp', alt: 'Studio Work', category: 'portrait' },
    { id: 5, src: '/images/portfolio/photo6.jpg', webp: '/images/portfolio/photo6.webp', alt: 'Photo Session', category: 'portrait' },
    { id: 6, src: '/images/portfolio/photo7.jpg', webp: '/images/portfolio/photo7.webp', alt: 'Portrait Photography', category: 'portrait' },
    { id: 7, src: '/images/portfolio/photo8.jpg', webp: '/images/portfolio/photo8.webp', alt: 'Professional Portrait', category: 'portrait' },
    { id: 8, src: '/images/portfolio/photo9.jpg', webp: '/images/portfolio/photo9.webp', alt: 'Studio Session', category: 'portrait' },
];

/**
 * Hero images configuration
 */
export const heroImages = {
    main: '/images/hero/hero.jpg',
    mainWebp: '/images/hero/hero.webp',
};

export default {
    getImagePath,
    getHeroImage,
    getPortfolioImage,
    portfolioImages,
    heroImages,
};
