export interface Worker {
    name: string
    qualification: string
    hourly_wage: number
    status: 'szabadságon' | 'dolgozik' | 'szabad'
}