'use client'

import { useTranslations } from 'next-intl';

export default function Main() {
    const t = useTranslations('Index');
    console.log(t);

    return (
        <main className="p-2 h-full dark:bg-gray-700 dark:text-gray-300 bg-white text-gray-900">
            <h1 className="text-center">{t('title')}</h1>

        </main>
    )
}
