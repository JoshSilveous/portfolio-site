import { IconPreload } from '@/components/IconPreload'
import { Navbar } from '@/content/NavBar/Navbar'
import { AboutMe, Skills, Projects, Experience, ContactInfo } from '@/content/sections'
import { TestFinanceTrackerImport } from '@/components'
import s from './page.module.scss'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function FinanceTrackerDemo() {
	return (
		<div className={`${s.main} ${inter.className}`}>
			<div className={s.layout}>
				<div className={s.container}>
					<TestFinanceTrackerImport />
				</div>
			</div>
		</div>
	)
}
