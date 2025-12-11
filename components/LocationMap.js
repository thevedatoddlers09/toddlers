"use client";

import { useEffect, useRef } from 'react';

/**
 * LocationMap Component
 * India's Fastest Growing Preschool Brand visualization using amCharts 5
 */
export default function LocationMap() {
    const chartRef = useRef(null);
    const rootRef = useRef(null);

    const stats = [
        { number: '900+', label: 'Preschools across India' },
        { number: '175+', label: 'Cities' },
        { number: '200K+', label: 'Happy Children' },
        { number: '50+', label: 'Early Childhood Education Experts' },
    ];

    // City data
    const cities = [
        { name: 'Delhi NCR', centres: 50, latitude: 28.7041, longitude: 77.1025 },
        { name: 'Mumbai', centres: 80, latitude: 19.0760, longitude: 72.8777 },
        { name: 'Bangalore', centres: 110, latitude: 12.9716, longitude: 77.5946 },
        { name: 'Chennai', centres: 90, latitude: 13.0827, longitude: 80.2707 },
        { name: 'Kolkata', centres: 60, latitude: 22.5726, longitude: 88.3639 },
        { name: 'Hyderabad', centres: 30, latitude: 17.3850, longitude: 78.4867 },
        { name: 'Pune', centres: 40, latitude: 18.5204, longitude: 73.8567 },
        { name: 'Ahmedabad', centres: 90, latitude: 23.0225, longitude: 72.5714 },
        { name: 'Jaipur', centres: 15, latitude: 26.9124, longitude: 75.7873 },
        { name: 'Lucknow', centres: 25, latitude: 26.8467, longitude: 80.9462 },
    ];

    useEffect(() => {
        // Dynamic import for client-side only
        const loadChart = async () => {
            const am5 = await import('@amcharts/amcharts5');
            const am5map = await import('@amcharts/amcharts5/map');
            const am5geodata_india = await import('@amcharts/amcharts5-geodata/indiaLow');
            const am5themes_Animated = await import('@amcharts/amcharts5/themes/Animated');

            // Create root
            const root = am5.Root.new(chartRef.current);
            rootRef.current = root;

            // Set themes
            root.setThemes([am5themes_Animated.default.new(root)]);

            // Create chart
            const chart = root.container.children.push(
                am5map.MapChart.new(root, {
                    panX: "none",
                    panY: "none",
                    wheelX: "none",
                    wheelY: "none",
                    projection: am5map.geoMercator(),
                })
            );

            // Create polygon series for India
            const polygonSeries = chart.series.push(
                am5map.MapPolygonSeries.new(root, {
                    geoJSON: am5geodata_india.default,
                    fill: am5.color(0x0a2540),
                    stroke: am5.color(0x4A90A4),
                    strokeWidth: 1,
                })
            );

            polygonSeries.mapPolygons.template.setAll({
                tooltipText: "{name}",
                interactive: false,
            });

            // Create point series for cities
            const pointSeries = chart.series.push(
                am5map.MapPointSeries.new(root, {})
            );

            pointSeries.bullets.push(function () {
                const container = am5.Container.new(root, {});

                // Outer circle
                container.children.push(
                    am5.Circle.new(root, {
                        radius: 8,
                        fill: am5.color(0xffffff),
                        stroke: am5.color(0xE31E24),
                        strokeWidth: 3,
                    })
                );

                // Inner dot
                container.children.push(
                    am5.Circle.new(root, {
                        radius: 3,
                        fill: am5.color(0xE31E24),
                    })
                );

                // City label
                container.children.push(
                    am5.Label.new(root, {
                        text: "{name}",
                        populateText: true,
                        fill: am5.color(0xffffff),
                        fontSize: 10,
                        fontWeight: "600",
                        centerX: am5.p50,
                        centerY: am5.p100,
                        dy: -12,
                        background: am5.RoundedRectangle.new(root, {
                            fill: am5.color(0x0a2540),
                            fillOpacity: 0.8,
                        }),
                        paddingTop: 2,
                        paddingBottom: 2,
                        paddingLeft: 6,
                        paddingRight: 6,
                    })
                );

                return am5.Bullet.new(root, {
                    sprite: container,
                });
            });

            // Add city data with correct geometry format
            cities.forEach(city => {
                pointSeries.data.push({
                    geometry: { type: "Point", coordinates: [city.longitude, city.latitude] },
                    name: city.name,
                    centres: city.centres,
                });
            });

            // Animate on load
            chart.appear(1000, 100);
        };

        loadChart();

        return () => {
            if (rootRef.current) {
                rootRef.current.dispose();
            }
        };
    }, []);

    return (
        <section className="bg-gradient-to-br from-[#87CEEB] via-[#5BA4B5] to-[#4A90A4] py-10 px-[4%] relative overflow-hidden rounded-[24px] my-6 mx-[3%]">
            <div className="absolute w-[500px] h-[500px] bg-white/10 rounded-full -top-[150px] -right-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[42%_58%] gap-12 items-center relative z-10 text-center md:text-left">
                {/* Left: Map */}
                <div className="flex justify-center items-center">
                    <div className="relative w-full max-w-[400px]">
                        <div
                            ref={chartRef}
                            className="w-full h-[320px] rounded-xl overflow-hidden"
                        ></div>
                    </div>
                </div>

                {/* Right: Content */}
                <div className="text-left">
                    <h2 className="text-4xl md:text-[2.4rem] font-extrabold text-white leading-[1.15] mb-8 font-poppins drop-shadow-sm">
                        India&apos;s<br />
                        <span className="text-[#FFD700]">Fastest Growing</span><br />
                        Preschool Brand
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[400px] md:max-w-none mx-auto md:mx-0">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="bg-white/85 p-5 rounded-xl backdrop-blur-sm">
                                <div className="text-[2.2rem] font-extrabold text-[#0056b3] leading-none mb-1 font-poppins">{stat.number}</div>
                                <div className="text-[0.85rem] font-medium text-[#1a1a1a] leading-tight">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
