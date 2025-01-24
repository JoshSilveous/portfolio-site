'use client'
import { useRouter } from 'next/navigation'
import { JButton } from '../JForm'

export function SignOutButton() {
	const router = useRouter()

	return (
		<JButton jstyle='secondary' disabled={true}>
			Sign Out
		</JButton>
	)
}
