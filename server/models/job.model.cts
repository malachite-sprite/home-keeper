import { add } from 'date-fns'

type JobIntervalScale = 'days' | 'weeks' | 'months'

export default class JobModel {
  constructor(
    public name: string,
    public interval: { scale: JobIntervalScale, value: number },
    public lastCompletedOn: Date | null = null,
  ) {}

  public getNextDueOn(): Date | null {
    const { scale, value } = this.interval

    if (!this.lastCompletedOn) {
      return null
    }

    return add(this.lastCompletedOn, { [scale]: value })
  }
}