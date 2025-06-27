import JobModel from "./job.model.cts"

describe('job.model', () => {
  describe('should return the next due date', () => {
    it('when the job has never been completed', () => {
      const defaultNullCompletedOn = new JobModel('test', { scale: 'days', value: 1 })
      expect(defaultNullCompletedOn.getNextDueOn()).toBeNull()
      const explicitNullCompletedOn = new JobModel('test', { scale: 'days', value: 1 }, null)
      expect(explicitNullCompletedOn.getNextDueOn()).toBeNull()
    })

    it('when the interval is days', () => {
      const oneDayInterval = new JobModel('test', { scale: 'days', value: 1 }, new Date('2025-06-01'))
      const sevenDayInterval = new JobModel('test', { scale: 'days', value: 7 }, new Date('2025-06-01'))
      const thirtyDayInterval = new JobModel('test', { scale: 'days', value: 30 }, new Date('2025-06-01'))

      expect(oneDayInterval.getNextDueOn()).toEqual(new Date('2025-06-02'))
      expect(sevenDayInterval.getNextDueOn()).toEqual(new Date('2025-06-08'))
      expect(thirtyDayInterval.getNextDueOn()).toEqual(new Date('2025-07-01'))
    })

    it('when the interval is weeks', () => {
      const oneWeekInterval = new JobModel('test', { scale: 'weeks', value: 1 }, new Date('2025-06-01'))
      const fourWeekInterval = new JobModel('test', { scale: 'weeks', value: 4 }, new Date('2025-06-01'))

      expect(oneWeekInterval.getNextDueOn()).toEqual(new Date('2025-06-08'))
      expect(fourWeekInterval.getNextDueOn()).toEqual(new Date('2025-06-29'))
    })

    it('when the interval is months', () => {
      const oneMonthInterval = new JobModel('test', { scale: 'months', value: 1 }, new Date('2025-06-01'))
      const thirteenMonthInterval = new JobModel('test', { scale: 'months', value: 13 }, new Date('2025-06-01'))

      expect(oneMonthInterval.getNextDueOn()).toEqual(new Date('2025-07-01'))
      expect(thirteenMonthInterval.getNextDueOn()).toEqual(new Date('2026-07-01'))
    })
  })
})