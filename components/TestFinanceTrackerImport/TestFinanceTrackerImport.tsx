import { Dashboard } from './Dashboard/Dashboard'
import s from './TestFinanceTrackerImport.module.scss'

export function TestFinanceTrackerImport() {
	return (
		<div className={s.container}>
			<Dashboard />
		</div>
	)
}
