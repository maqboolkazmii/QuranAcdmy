import { GraduationCap, Users, Clock, Globe2, Shield, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
    {
        icon: GraduationCap,
        title: 'Qualified Teachers',
        description: 'All our teachers are certified, verified and experienced in online Quran education.',
    },
    {
        icon: Users,
        title: 'Male & Female Teachers',
        description: 'Choose a male or female teacher based on your preference and comfort.',
    },
    {
        icon: Clock,
        title: 'Flexible Schedules',
        description: 'Classes available 7 days a week, morning to evening, across all time zones.',
    },
    {
        icon: Globe2,
        title: 'Students Worldwide',
        description: 'Serving families in the USA, UK, Europe and beyond since 2020.',
    },
    {
        icon: Shield,
        title: 'Safe Learning Environment',
        description: 'All classes are online, recorded references available, and child safeguarding is our priority.',
    },
    {
        icon: Star,
        title: 'Free Trial Class',
        description: 'Try before you commit. Book a free trial with any teacher, any course — no payment required.',
    },
];

export default function WhyUsSection() {
    return (
        <section className="section-padding bg-white">
            <div className="container-brand">

                {/* ── Section Header ── */}
                <div className="text-center mb-14">
                    <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">
                        Our Difference
                    </p>
                    <h2 className="section-heading">Why Choose AyatBridge Academy?</h2>
                    <p className="section-subheading mx-auto">
                        We combine qualified Islamic scholarship with the convenience of modern online learning.
                    </p>
                    <div className="heading-underline mx-auto mt-5" />
                </div>

                {/* ── Features Grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={feature.title}
                                className={cn(
                                    'flex gap-4 p-6 rounded-2xl bg-brand-ivory',
                                    'border border-transparent hover:border-brand-primary/20',
                                    'hover:shadow-brand transition-all duration-300 group'
                                )}
                            >
                                {/* Icon Box — green background, white icon */}
                                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-xl bg-brand-primary group-hover:bg-brand-gold transition-colors duration-300">
                                    <Icon className="h-6 w-6 text-white" />
                                </div>

                                {/* Text Content */}
                                <div>
                                    <h3 className="font-serif font-bold text-brand-charcoal text-lg mb-1">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>

                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
