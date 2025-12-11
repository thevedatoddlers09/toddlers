"use client";

import { useEffect, useRef, useLayoutEffect } from 'react';
import styles from './LocationMap.module.css';

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
        <section className={styles.mapSection}>
            <div className={styles.decorativeCircle}></div>

            <div className={styles.container}>
                {/* Left: Map */}
                <div className={styles.mapColumn}>
                    <div className={styles.mapWrapper}>
                        <div
                            ref={chartRef}
                            className={styles.amchartContainer}
                        ></div>
                    </div>
                </div>

                {/* Right: Content */}
                <div className={styles.contentColumn}>
                    <h2 className={styles.headline}>
                        India&apos;s<br />
                        <span className={styles.highlight}>Fastest Growing</span><br />
                        Preschool Brand
                    </h2>

                    <div className={styles.statsGrid}>
                        {stats.map((stat, idx) => (
                            <div key={idx} className={styles.statCard}>
                                <div className={styles.statNumber}>{stat.number}</div>
                                <div className={styles.statLabel}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
