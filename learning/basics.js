"use strict";
const deals = [
    {
        restaurant: "Gokyuzu",
        dealName: "Lunch Special",
        price: 8.50,
        isHalal: true,
        status: "active"
    },
    {
        restaurant: 'Pizza Express',
        dealName: 'Student Pizza',
        price: 6.99,
        isHalal: false,
        status: 'active'
    },
    {
        restaurant: 'Pepes Piri Piri',
        dealName: 'Chicken Meal',
        price: 5.99,
        isHalal: true,
        status: 'expired'
    }
];
const halalDeals = deals.filter((deal) => deal.isHalal == true && deal.status == 'active');
const restaurantNames = halalDeals.map((item) => item.restaurant);
console.log("Active Halal Deals:", restaurantNames);
