const {Item, Supplier, Warehouse, Inventory, User} = require('./index');
const {sequelize} = require('../db');

describe('Item Model', () => {
	beforeAll(async () => {
		await sequelize.sync({force: true})
	});

	test('can create a Item', async() => {
		const testItem = await Item.create({name : 'Cholula'})
		expect(testItem.name).toBe('Cholula')
	})

	test("user can delete item") 


	

})

